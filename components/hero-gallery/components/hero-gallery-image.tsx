import { GalleryImage as StrapiGalleryImage } from "@/lib/strapi/types/components";
import { resolveStrapiMediaUrl } from "@/lib/strapi/utils";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";
import Image from "next/image";

export type HeroGalleryImageProps = StrapiGalleryImage &
  Pick<React.ComponentProps<typeof Image>, "priority">;

export function HeroGalleryImage({
  title,
  description,
  image,
  priority,
}: HeroGalleryImageProps) {
  return (
    <figure className="group relative w-screen h-screen overlay-neutral-y">
      {/* Image */}
      <Image
        fill
        src={resolveStrapiMediaUrl(image.url)}
        className="object-cover object-top"
        alt={image.alternativeText ?? ""}
        aria-hidden={image.alternativeText ? false : true}
        priority={priority}
        quality={85}
      />
      <div className="absolute inset-0 overlay-neutral-y" />
      <figcaption className="absolute inset-x-0 bottom-0">
        <div className="container-fluid mx-auto py-6 text-background dark:text-foreground max-md:text-center min-h-40">
          <h3
            className={cn(
              typography({ variant: "h5", disableGutters: true }),
              "font-bold"
            )}
          >
            {title}
          </h3>
          {description ? (
            <p
              className={cn(
                typography({ variant: "h6", disableGutters: true })
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
}
