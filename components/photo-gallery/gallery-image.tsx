import { Container } from "@/components/container";
import Image from "next/image";
import { Typography } from "../typohraphy";

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
    <div
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

      {/* Desktop overlay - appears on hover */}
      <div className="absolute inset-x-0 bottom-0 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Container className="bg-linear-to-t from-black/90 via-black/70 to-transparent py-6">
          <Typography
            variant="overline"
            component="h3"
            className="text-white mt-0"
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            component="p"
            className="text-white/90"
            disableGutters
          >
            {description}
          </Typography>
        </Container>
      </div>

      {/* Mobile text - always visible below image */}
      <Container className="block sm:hidden py-6">
        <Typography variant="overline" component="h3" className="mt-0">
          {title}
        </Typography>
        <Typography
          variant="caption"
          component="p"
          className="text-muted-foreground"
          disableGutters
        >
          {description}
        </Typography>
      </Container>
    </div>
  );
}
