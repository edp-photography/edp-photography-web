// components/StrapiImage.tsx
import { StrapiImage as StrapiImageType } from "@/lib/strapi/types/fields";
import { getStrapiImageUrl } from "@/lib/strapi/utils";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface StrapiImageProps extends Omit<
  NextImageProps,
  "src" | "width" | "height" | "unoptimized" | "alt"
> {
  image: StrapiImageType;
  format?: "thumbnail" | "small" | "medium" | "large";
  alt?: string;
}

/**
 * Wrapper for Next.js Image component that handles Strapi media
 *
 * Features:
 * - Auto-converts Strapi image to proper URL via getStrapiImageUrl()
 * - Alt text: uses image.alternativeText from Strapi, or pass explicit alt
 * - Pass alt="" for decorative images → adds role="presentation"
 * - Width/height: always from image metadata, can't override
 * - Format: if specified, disables Next.js optimization (Strapi already optimized)
 * - Fill: when fill={true}, width/height are skipped (Next.js requirement)
 *
 * @example
 * // Standard usage with Next.js optimization
 * <StrapiImage image={data.image} alt="Hero" />
 *
 * @example
 * // Use Strapi's pre-optimized thumbnail
 * <StrapiImage image={data.image} format="thumbnail" alt="Avatar" />
 *
 * @example
 * // Decorative image (skipped by screen readers)
 * <StrapiImage image={data.bg} alt="" />
 *
 * @example
 * // Fill container (parent must be position: relative)
 * <StrapiImage image={data.image} fill className="object-cover" alt="Background" />
 */
export function StrapiImage({
  image,
  format,
  alt,
  ...props
}: StrapiImageProps) {
  alt = alt !== undefined ? alt : image?.alternativeText || "";

  return (
    <NextImage
      src={getStrapiImageUrl(image, format)}
      alt={alt}
      {...(!alt && { role: "presentation" })}
      {...(!props.fill && { width: image.width, height: image.height })}
      {...(format && { unoptimized: true })}
      {...props}
    />
  );
}
