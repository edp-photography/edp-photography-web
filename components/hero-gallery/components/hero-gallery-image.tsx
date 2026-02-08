import { StrapiImage } from "@/components/strapi-image";
import { GalleryImage } from "@/lib/strapi/types/components";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";

export type HeroGalleryImageProps = GalleryImage & {
  preload?: boolean;
};

export function HeroGalleryImage({
  title,
  description,
  image,
  preload,
}: HeroGalleryImageProps) {
  return (
    <figure className="group relative w-screen h-screen overlay-neutral-y">
      {/* Image */}
      <StrapiImage
        image={image}
        format="medium"
        fill
        className="object-cover object-top md:hidden"
        preload={preload}
      />
      <StrapiImage
        image={image}
        format="large"
        fill
        className="object-cover object-top max-md:hidden"
        preload={preload}
      />
      <div className="absolute inset-0 overlay-neutral-y" />
      <figcaption className="absolute inset-x-0 bottom-0">
        <div className="container-fluid mx-auto py-6 text-background dark:text-foreground max-md:text-center min-h-40">
          <h3
            className={cn(
              typography({ variant: "h5", disableGutters: true }),
              "font-bold",
            )}
          >
            {title}
          </h3>
          {description ? (
            <p
              className={cn(
                typography({ variant: "h6", disableGutters: true }),
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
