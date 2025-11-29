"use client";

import { Container } from "@/components/container";
import { Headroom, HeadroomProps } from "@/components/headroom";
import { Link } from "@/components/link";
import { Typography } from "@/components/typohraphy";
import { useKeyPress } from "@/hooks/use-key-press";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const scrollY = useScrollPosition();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const handleEscape = useCallback((pressed: boolean) => {
    if (pressed) {
      setOpen(false);
    }
  }, []);

  useKeyPress({ key: "Escape", callback: handleEscape });

  const isPastTransparentPoint =
    typeof window !== "undefined"
      ? scrollY > Math.round(window.innerHeight * 0.7)
      : false;

  const isTransparent = pathname === "/" && !isPastTransparentPoint && !open;

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
      onUnpin: () => setOpen(false),
    }),
    []
  );

  return (
    <nav>
      <Headroom options={headroomOptions}>
        <Container
          className={cn("flex justify-between items-center sm:items-baseline", {
            "overlay-white-y dark:text-background": open,
            "bg-transparent text-background dark:text-foreground":
              isTransparent,
            "bg-background": !open && !isTransparent,
          })}
        >
          {/* Logo/Name */}
          <Link href={routes.home} className="py-2" underline="none">
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
            isOpen={open}
            setIsOpen={setOpen}
          />
          <button
            onClick={() => setOpen(true)}
            className="inline-block p-2 sm:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobileMenu"
          >
            <Menu className="size-10" />
          </button>
        </Container>
        <MobileMenu
          id="mobileMenu"
          className="sm:hidden"
          isOpen={open}
          setIsOpen={setOpen}
        />
      </Headroom>
    </nav>
  );
}
