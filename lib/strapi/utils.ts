import { env } from "@/config/env";

export function resolveStrapiMediaUrl(url: string | null | undefined) {
  if (!url) return "";
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;

  return new URL(url, env.NEXT_PUBLIC_STRAPI_API_URL).href;
}
