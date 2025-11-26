"use client";

import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { Separator } from "@/components/ui/separator";
import { PAGES } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Fragment } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

type Props = {
  className?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export function MobileMenu({ isOpen, setIsOpen, className }: Props) {
  const ToggleIcon = isOpen ? X : Menu;
  const toggleLabel = isOpen ? "Close menu" : "Open menu";

  return (
    <Container
      disableGutters={!isOpen}
      className={cn(
        {
          "fixed w-full h-screen inset-0 bg-background text-foreground": isOpen,
        },
        className
      )}
    >
      <div className={cn(isOpen && "flex w-full h-full flex-col items-center")}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 self-end"
          aria-label={toggleLabel}
        >
          <ToggleIcon className="size-10" />
        </button>
        {/* Navigation Items */}
        <nav className={cn(!isOpen && "hidden", isOpen && "w-full max-w-xs")}>
          {PAGES.map((page, index) => (
            <Fragment key={page.path}>
              <Link
                href={page.path}
                variant="h6"
                underline="none"
                className="block text-center py-4"
                onClick={() => setIsOpen(false)}
              >
                {page.title}
              </Link>
              {index < PAGES.length - 1 && <Separator className="bg-current" />}
            </Fragment>
          ))}
        </nav>
        {/* Social Icons */}
        <div
          className={cn(
            !isOpen && "hidden",
            isOpen && "flex w-full justify-center gap-6 mt-auto py-4"
          )}
        >
          <Link
            external
            href="https://instagram.com"
            variant="inherit"
            underline="none"
            className="p-2"
          >
            <FaInstagram className="size-6" />
          </Link>
          <Link
            external
            href="https://www.youtube.com/"
            variant="inherit"
            underline="none"
            className="p-2"
          >
            <FaYoutube className="size-6" />
          </Link>
          <Link
            external
            href="https://www.facebook.com/"
            variant="inherit"
            underline="none"
            className="p-2"
          >
            <FaFacebookF className="size-5" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
