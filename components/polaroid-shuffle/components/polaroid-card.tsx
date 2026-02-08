import { StrapiImage } from "@/components/strapi-image";
import { GalleryImage } from "@/lib/strapi/types/components";
import { cn } from "@/lib/utils";

type PolaroidCardProps = React.ComponentProps<"div"> & GalleryImage;

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
        "bg-white dark:bg-neutral-200 shadow-lg",
        // Polaroid card ratio
        "w-full aspect-88/107",
        // Responsive padding (Polaroid-accurate)
        "p-[6%_4.5%_18%]",
        className,
      )}
      {...props}
    >
      {/* Photo area */}
      <div className="relative w-full aspect-square overflow-hidden bg-neutral-200">
        <StrapiImage
          image={image}
          format="medium"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Caption area */}
      <div className="mt-[6%] text-center">
        <p className="text-neutral-900 font-handwriting text-2xl font-semibold">
          {title}
        </p>

        {description && (
          <p className="text-neutral-700 text-sm mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
