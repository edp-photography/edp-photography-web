import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { env } from "./config/env";

// This function can be marked `async` if using `await` inside
export function proxy(_request: NextRequest) {
  const response = NextResponse.next();

  // Allow Strapi admin to embed your site in an iframe
  // Extract origin from Strapi URL (removes /api path)
  const strapiOrigin = new URL(env.NEXT_PUBLIC_STRAPI_API_URL).origin;

  // Set CSP frame-ancestors for modern browsers
  response.headers.set(
    "Content-Security-Policy",
    `frame-ancestors 'self' ${strapiOrigin}`
  );

  // Override Vercel's default X-Frame-Options: DENY
  // Note: ALLOW-FROM is deprecated but needed for legacy browser support
  // Modern browsers will use CSP frame-ancestors instead
  response.headers.set("X-Frame-Options", "SAMEORIGIN");

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
