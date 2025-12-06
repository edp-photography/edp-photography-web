"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroGalleryImage } from "./components/hero-gallery-image";

export type GalleryImage = {
  title: string;
  description: string;
  alt?: string;
  url: string;
};

type HeroGalleryProps = Omit<React.ComponentProps<"section">, "children"> & {
  images: GalleryImage[];
};

const plugins = [
  Fade(),
  Autoplay({
    delay: 6000,
    stopOnInteraction: true,
  }),
];

export function HeroGallery({ images, className, ...props }: HeroGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className={cn("relative", className)} {...props}>
      <Carousel
        className="w-full h-screen"
        opts={{ loop: true }}
        plugins={plugins}
        setApi={setApi}
      >
        <CarouselContent className="ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-screen basis-full pl-0">
              <HeroGalleryImage
                src={image.url}
                alt={image.alt ?? ""}
                title={image.title}
                description={image.description}
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-0 inset-x-0 max-md:hidden">
        <div className="container-fluid mx-auto relative flex justify-end items-center h-20 py-4">
          <ChevronDown
            className={cn(
              "size-20 text-white motion-safe:animate-bounce-fade p-2",
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
            strokeWidth={0.5}
            aria-hidden
          />
          <div className="flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full border border-white transition-colors",
                  current === index ? "bg-white" : "bg-transparent"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
