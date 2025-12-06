import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_STRAPI_API_URL: z.url(),
  NEXT_PUBLIC_STRAPI_MEDIA_URL: z.url(),
});

export const env = envSchema.parse(process.env);
