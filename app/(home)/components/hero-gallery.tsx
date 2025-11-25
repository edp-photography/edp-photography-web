"use client";

import { Container } from "@/components/container";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/hero-gallery/1.jpg",
  "/images/hero-gallery/2.jpg",
  "/images/hero-gallery/3.jpg",
] as const;

const plugins = [
  Fade(),
  Autoplay({
    delay: 6000,
    stopOnInteraction: true,
  }),
];

export function HeroGallery() {
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
    <section className="relative">
      <Carousel
        className="w-full h-screen"
        opts={{ loop: true }}
        plugins={plugins}
        setApi={setApi}
      >
        <CarouselContent className="ml-0">
          {images.map((src, index) => (
            <CarouselItem key={index} className="h-screen basis-full pl-0">
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  preload={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 overlay-neutral-y pointer-events-none" />
      <Container className="absolute bottom-0 left-0 right-0">
        <div className="flex items-center">
          <div className="flex-1 flex justify-center">
            <ChevronDown
              className="h-18 w-18 text-white motion-safe:animate-bounce-fade"
              strokeWidth={0.5}
              aria-hidden
            />
          </div>
          <div className="flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full border border-white transition-colors ${
                  current === index ? "bg-white" : "bg-transparent"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
