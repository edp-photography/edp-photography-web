import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";
import Image from "next/image";

export type HeroGalleryImageProps = Pick<
  React.ComponentProps<typeof Image>,
  "alt" | "priority" | "src"
> & {
  title: string;
  description: string | null;
};

export function HeroGalleryImage({
  title,
  description,
  alt,
  src,
  priority,
}: HeroGalleryImageProps) {
  return (
    <figure className="group relative w-screen h-screen overlay-neutral-y">
      {/* Image */}
      <Image
        fill
        src={src}
        placeholder="empty"
        blurDataURL={`${src}?w=10&q=10`}
        className="object-cover"
        alt={alt}
        priority={priority}
        quality={90}
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
          <p
            className={cn(typography({ variant: "h6", disableGutters: true }))}
          >
            {description}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
