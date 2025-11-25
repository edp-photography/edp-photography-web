"use client";

import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { Typography } from "@/components/typohraphy";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PAGES = [
  { path: "/", title: "HOMEPAGE" },
  { path: "/about", title: "ABOUT" },
  { path: "/contact", title: "CONTACT" },
];

export function Navbar() {
  const scrollY = useScrollPosition();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isPastTransparentPoint =
    typeof window !== "undefined"
      ? scrollY > Math.round(window.innerHeight * 0.7)
      : false;

  return (
    <nav
      className={cn(
        "relative bg-background text-foreground transition-colors duration-300",
        isDropdownOpen &&
          "overlay-white-y dark:bg-transparent dark:text-background",
        !isPastTransparentPoint && !isDropdownOpen && "bg-transparent"
      )}
    >
      <Container className="relative flex justify-between items-baseline py-4">
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
        <NavigationDropdownDesktop
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
        />
      </Container>
    </nav>
  );
}

function NavigationDropdownDesktop({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();

  const activePage = PAGES.find((page) => page.path === pathname);
  const inactivePages = PAGES.filter((page) => page.path !== pathname);

  return (
    <div className="flex flex-col items-end">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center gap-2 cursor-pointer group py-1 border-b border-current">
          <Typography
            variant="h6"
            component="h2"
            className="font-bold"
            disableGutters
          >
            {activePage?.title || "HOMEPAGE"}
          </Typography>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col items-end py-4 space-y-4">
          {inactivePages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              variant="h6"
              className="font-bold"
              underline="none"
            >
              {page.title}
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
