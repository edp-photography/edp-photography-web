import { GalleryImage } from "@/lib/strapi/types/components";
import { resolveStrapiMediaUrl } from "@/lib/strapi/utils";
import { cn } from "@/lib/utils";
import Image from "next/image";

type PolaroidCardProps = GalleryImage & React.ComponentProps<"div">;

export function PolaroidCard({
  title,
  description,
  image,
  className,
  ...props
}: PolaroidCardProps) {
  return (
    <div
      className={cn(
        className,
        "bg-white dark:bg-neutral-100 p-4 pb-16 shadow-lg"
      )}
      {...props}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={resolveStrapiMediaUrl(image.url)}
          alt={image.alternativeText ?? ""}
          aria-hidden={image.alternativeText ? false : true}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-neutral-900 font-handwriting text-lg">{title}</p>
        {description && (
          <p className="text-neutral-700 text-sm mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
