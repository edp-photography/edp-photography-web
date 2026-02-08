import { StrapiImage } from "@/components/strapi-image";
import { GalleryImage as GalleryImageType } from "@/lib/strapi/types/components";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";

type GalleryImageProps = GalleryImageType & {
  width: number;
  height: number;
  preload?: boolean;
};

export function GalleryImage({
  image,
  title,
  description,
  width,
  height,
  preload,
}: GalleryImageProps) {
  return (
    <figure
      className="group relative w-full"
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <StrapiImage
          image={image}
          format="medium"
          fill
          className="object-cover md:hidden"
          preload={preload}
        />
        <StrapiImage
          image={image}
          format="large"
          fill
          className="object-cover max-md:hidden"
          preload={preload}
        />
      </div>
      <figcaption
        className="
        p-6
        md:absolute md:inset-x-0 md:bottom-0
        md:text-background md:dark:text-foreground
        md:opacity-0 md:bg-linear-to-t md:from-black/90 md:via-black/70 md:to-transparent
        md:group-hover:opacity-100
        md:transition-opacity md:duration-300
      "
      >
        <h3
          className={cn(
            typography({ variant: "h6", disableGutters: true }),
            "font-bold",
          )}
        >
          {title}
        </h3>
        {description ? (
          <p
            className={cn(
              typography({ variant: "caption", disableGutters: true }),
              "uppercase",
            )}
          >
            {description}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
