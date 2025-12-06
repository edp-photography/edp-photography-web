import { env } from "@/config/env";
import type { paths } from "@/lib/strapi/types";
import qs from "qs";

type NextFetchConfig = {
  revalidate?: number | false;
  tags?: string[];
};

type HttpMethod = "get" | "post" | "put" | "delete";

/**
 * Extract query params type for given Path + Method
 */
type QueryParamsFor<
  Path extends keyof paths,
  Method extends HttpMethod
> = paths[Path][Method] extends {
  parameters: { query?: infer Q };
}
  ? Q
  : never;

type DeepPopulate = {
  [key: string]: {
    populate?: DeepPopulate | string | string[];
  };
};

type FetchAPIOptions<Body, Query> = {
  method?: Uppercase<HttpMethod>;
  authToken?: string;
  body?: Body;
  query?: Query extends { populate?: unknown }
    ? Omit<Query, "populate"> & {
        populate?: Query["populate"] | DeepPopulate;
      }
    : Query;
  next?: NextFetchConfig;
};

/**
 * Extract 200 response type for given Path + Method
 */
type ResponseFor<
  Path extends keyof paths,
  Method extends HttpMethod
> = paths[Path][Method] extends {
  responses: { 200: { content: { "application/json": infer T } } };
}
  ? T
  : never;

/**
 * Main wrapper with full inference.
 */
export async function fetchAPI<
  Path extends keyof paths,
  Method extends HttpMethod = "get",
  Body = unknown
>(
  path: Path,
  options: FetchAPIOptions<Body, QueryParamsFor<Path, Method>> = {}
): Promise<ResponseFor<Path, Method>> {
  const { method = "GET", authToken, body, query, next } = options;

  const url = new URL(`api${path}`, env.NEXT_PUBLIC_STRAPI_API_URL);

  // Append query params
  if (query) {
    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
      arrayFormat: "indices",
    });
    if (queryString) {
      url.search = queryString;
    }
  }

  console.log("url.href: ", url.href);

  const isFormData = body instanceof FormData;

  const fetchOptions: RequestInit & { next?: NextFetchConfig } = {
    method,
    headers: {
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
      ...(!isFormData && body && { "Content-Type": "application/json" }),
    },
    ...(body && {
      body: isFormData ? body : JSON.stringify(body),
    }),
    ...(next && { next }),
  };

  const res = await fetch(url.toString(), fetchOptions);

  if (!res.ok) {
    const msg = await safeParseError(res);
    throw new Error(`Fetch failed (${res.status}): ${msg}`);
  }

  return await safeParseJSON(res);
}

async function safeParseJSON(res: Response) {
  const type = res.headers.get("content-type");
  if (type?.includes("application/json")) return res.json();
  return res.text();
}

async function safeParseError(res: Response) {
  try {
    return JSON.stringify(await res.json());
  } catch {
    return res.statusText;
  }
}
