import type { NextConfig } from "next";
import { env } from "./config/env";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    qualities: [10, 75, 85],
    remotePatterns: [
      new URL("http://emanueldellapia.com/**"),
      new URL("https://emanueldellapia.com/**"),
      new URL(`${env.NEXT_PUBLIC_STRAPI_MEDIA_URL}/**`),
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const strapiOrigin = new URL(env.NEXT_PUBLIC_STRAPI_API_URL).origin;
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors 'self' ${strapiOrigin}`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
