import type { NextConfig } from "next";
import { env } from "./config/env";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    qualities: [10, 75, 90],
    remotePatterns: [
      new URL("http://emanueldellapia.com/**"),
      new URL("https://emanueldellapia.com/**"),
      new URL(`${env.NEXT_PUBLIC_STRAPI_MEDIA_URL}/**`),
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
