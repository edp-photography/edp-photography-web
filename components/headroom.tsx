"use client";

import _Headroom from "headroom.js";
import { ReactNode, useEffect, useRef } from "react";

type HeadroomProps = {
  children: ReactNode;
};

const options = {
  offset: {
    up: 100,
    down: 50,
  },
  tolerance: {
    up: 5,
    down: 0,
  },
};

export function Headroom({ children }: HeadroomProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const headroom = new _Headroom(ref.current, options);

    headroom.init();
    return () => headroom.destroy();
  }, []);

  return <div ref={ref}>{children}</div>;
}
