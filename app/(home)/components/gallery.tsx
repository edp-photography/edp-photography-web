import { cn } from "@/lib/utils";
import Image from "next/image";
import { galleryImages } from "../data";

export function Gallery() {
  return (
    <section className="flex flex-wrap gap-0">
      {galleryImages.map((galleryImage, index) => (
        <div
          key={index}
          className={cn(
            "relative group cursor-pointer",
            galleryImage.type === "landscape"
              ? "basis-2/3 aspect-4/3"
              : "basis-1/3 aspect-3/4"
          )}
        >
          <Image
            src={galleryImage.src}
            alt={galleryImage.alt}
            fill
            style={{ objectFit: "cover" }}
          />
          {/* Overlay */}
          <div
            className="
                      absolute inset-0 flex flex-col justify-end p-4
                      bg-linear-to-t from-black/80 via-black/30 to-transparent
                      opacity-0 transition-opacity duration-200
                      group-hover:opacity-100
                      group-active:opacity-100
                    "
          >
            <span className="text-white text-sm font-medium">
              {galleryImage.title}
            </span>
            <span className="text-white text-xs opacity-90">
              {galleryImage.description}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
