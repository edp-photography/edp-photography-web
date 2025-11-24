"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../../components/mode-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isPastHero = useScrollPosition();

  return (
    <nav
      className={cn(
        "px-6 py-2 bg-background text-foreground transition-colors duration-300",
        !isPastHero && "dark bg-transparent"
      )}
    >
      <div className="flex justify-between items-center h-16">
        {/* Logo/Name */}
        <div className="text-xl font-semibold tracking-widest">
          EMANUEL DELLA PIA
        </div>
        {/* Menu */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className={`p-2 rounded-md transition-colors ${
                  isPastHero ? "hover:bg-accent" : "hover:bg-white/20"
                }`}
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Fashion</DropdownMenuItem>
              <DropdownMenuItem>Videoclips</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
