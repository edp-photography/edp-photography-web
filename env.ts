import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_STRAPI_API_URL: z.url(),
    NEXT_PUBLIC_STRAPI_MEDIA_URL: z.url(),
  },
  server: {
    PREVIEW_SECRET: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    NEXT_PUBLIC_STRAPI_MEDIA_URL: process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL,
    PREVIEW_SECRET: process.env.PREVIEW_SECRET,
  },
});
