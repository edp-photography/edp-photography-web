import { env } from "@/env";
import { StrapiImage, StrapiMedia } from "./types/fields";

export function toAbsoluteUrl(url: string | null | undefined) {
  if (!url) return "";
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;

  return new URL(url, env.NEXT_PUBLIC_STRAPI_MEDIA_URL).href;
}

export function getStrapiMediaUrl(media: StrapiMedia) {
  return toAbsoluteUrl(media.url);
}

export function getStrapiImageUrl(
  image: StrapiImage,
  format?: "large" | "medium" | "small" | "thumbnail",
): string {
  if (!format) return getStrapiMediaUrl(image);

  const formats = image.formats as Record<string, { url: string }> | undefined;
  const formatUrl = formats?.[format]?.url;

  return formatUrl ? toAbsoluteUrl(formatUrl) : getStrapiMediaUrl(image);
}
