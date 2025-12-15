import { env } from "@/config/env";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const url = searchParams.get("url");
  const status = searchParams.get("status");

  // Validate the secret
  if (secret !== env.PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  // Validate the url parameter exists
  if (!url) {
    return new Response("Missing url parameter", { status: 400 });
  }

  // Prevent open redirects
  if (!url.startsWith("/") || url.includes("://")) {
    return new Response("Invalid redirect", { status: 400 });
  }

  const draft = await draftMode();

  if (status === "published") {
    draft.disable();
  } else {
    draft.enable();
  }

  redirect(url);
}
