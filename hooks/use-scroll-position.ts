"use client";

import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight; // 100vh
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsPastHero(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isPastHero;
}
