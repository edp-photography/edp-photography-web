import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";
import Image from "next/image";

type GalleryImageProps = Pick<
  React.ComponentProps<typeof Image>,
  "src" | "alt" | "sizes" | "width" | "height" | "priority" | "blurDataURL"
> & {
  title?: string;
  description?: string;
};

export function GalleryImage({
  alt,
  title,
  description,
  sizes,
  src,
  width,
  height,
  priority,
  blurDataURL,
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
        <Image
          fill
          placeholder={blurDataURL ? "blur" : "empty"}
          className="object-cover"
          blurDataURL={blurDataURL}
          priority={priority}
          src={src}
          alt={alt}
          sizes={sizes}
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
            "font-bold"
          )}
        >
          {title}
        </h3>
        {description ? (
          <p
            className={cn(
              typography({ variant: "caption", disableGutters: true }),
              "uppercase"
            )}
          >
            {description}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
