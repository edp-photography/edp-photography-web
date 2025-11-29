"use client";

import { useEffect } from "react";

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    // Cleanup on unmount or when `locked` changes
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}
