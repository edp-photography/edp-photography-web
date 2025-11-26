"use client";

import { Container } from "@/components/container";
import { Headroom, HeadroomProps } from "@/components/headroom";
import { Link } from "@/components/link";
import { Typography } from "@/components/typohraphy";
import { useKeyPress } from "@/hooks/use-key-press";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const scrollY = useScrollPosition();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const handleEscape = useCallback((pressed: boolean) => {
    if (pressed) {
      setIsDropdownOpen(false);
    }
  }, []);

  useKeyPress({ key: "Escape", callback: handleEscape });

  const isPastTransparentPoint =
    typeof window !== "undefined"
      ? scrollY > Math.round(window.innerHeight * 0.7)
      : false;

  const isTransparent =
    pathname === "/" && !isPastTransparentPoint && !isDropdownOpen;

  const headroomOptions = useMemo<HeadroomProps["options"]>(
    () => ({
      offset: {
        up: 100,
        down: 50,
      },
      tolerance: {
        up: 5,
        down: 0,
      },
      onUnpin: () => setIsDropdownOpen(false),
    }),
    []
  );

  return (
    <Headroom options={headroomOptions}>
      <Container
        component="nav"
        className={cn("flex justify-between items-center sm:items-baseline", {
          "overlay-white-y dark:text-background": isDropdownOpen,
          "bg-transparent text-background dark:text-foreground": isTransparent,
          "bg-background": !isDropdownOpen && !isTransparent,
        })}
      >
        {/* Logo/Name */}
        <Link href="/" className="py-2" underline="none">
          <Typography
            variant="h4"
            component="h1"
            disableGutters
            className="font-bold"
          >
            EMANUEL DELLA PIA
          </Typography>
        </Link>
        {/* Menu */}
        <DesktopMenu
          className="max-sm:hidden"
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
        />
        <MobileMenu
          className="sm:hidden"
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
        />
      </Container>
    </Headroom>
  );
}
