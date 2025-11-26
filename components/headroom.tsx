"use client";

import HeadroomJs, { HeadroomOptions } from "headroom.js";
import { ReactNode, useEffect, useRef } from "react";

export type HeadroomProps = {
  children: ReactNode;
  options?: HeadroomOptions;
};

export function Headroom({ children, options }: HeadroomProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const headroom = new HeadroomJs(ref.current, options);

    headroom.init();
    return () => headroom.destroy();
  }, [options]);

  return <div ref={ref}>{children}</div>;
}
