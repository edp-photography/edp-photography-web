"use client";

import { GalleryImage as StrapiGalleryImage } from "@/lib/strapi/types/components";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PolaroidCard } from "./components/polaroid-card";

type PolaroidShuffleProps = {
  images: StrapiGalleryImage[];
} & React.ComponentProps<"div">;

// Generate random rotation between -15 and 15 degrees
const getRandomRotation = () => Math.random() * 30 - 15;

export function PolaroidShuffle({
  images,
  className,
  ...props
}: PolaroidShuffleProps) {
  // Initialize cards with unique IDs and rotations
  const [cards] = useState<
    (StrapiGalleryImage & { id: string; rotation: number })[]
  >(() =>
    images.map((img, idx) => ({
      ...img,
      id: `card-${idx}`,
      rotation: getRandomRotation(),
    }))
  );

  // Track visible cards with animation counter for forcing re-animation
  const [visibleCards, setVisibleCards] = useState<
    Array<{ id: string; animKey: number }>
  >(() => (cards.length > 0 ? [{ id: cards[0].id, animKey: 0 }] : []));
  const nextCardIndexRef = useRef(1);

  useEffect(() => {
    if (cards.length === 0) return;

    const interval = setInterval(() => {
      const currentIndex = nextCardIndexRef.current;

      if (currentIndex < cards.length) {
        // Still throwing initial cards
        setVisibleCards((prev) => [
          ...prev,
          { id: cards[currentIndex].id, animKey: currentIndex },
        ]);
        nextCardIndexRef.current = currentIndex + 1;
      } else {
        // Loop: remove bottom card and rethrow it on top with new animKey
        setVisibleCards((prev) => {
          const [bottom, ...rest] = prev;
          return [...rest, { id: bottom.id, animKey: Date.now() }];
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [cards]);

  if (cards.length === 0) return null;

  return (
    <div
      className={cn(className, "relative w-full max-w-md mx-auto h-[500px]")}
      {...props}
    >
      <AnimatePresence>
        {visibleCards.map((visibleCard, stackIndex) => {
          const card = cards.find((c) => c.id === visibleCard.id);
          if (!card) return null;

          return (
            <motion.div
              key={`${visibleCard.id}-${visibleCard.animKey}`}
              initial={{
                x: 300,
                y: -300,
                opacity: 0,
                rotate: 45,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                rotate: card.rotation,
                zIndex: stackIndex,
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="absolute inset-0"
              style={{
                transformOrigin: "center center",
              }}
            >
              <PolaroidCard {...card} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
