"use client";

import { Link } from "@/components/link";
import { SocialLinks } from "@/components/social-links";
import { Separator } from "@/components/ui/separator";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = Omit<React.ComponentProps<"div">, "children"> & {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export function MobileMenu({
  isOpen,
  setIsOpen,
  className,
  id,
  ...props
}: Props) {
  const pathname = usePathname();
  useScrollLock(isOpen);
  const trapRef = useFocusTrap<HTMLDivElement>(isOpen);

  return (
    <div
      ref={trapRef}
      className={cn(
        isOpen
          ? "fixed inset-0 flex flex-col bg-background text-foreground h-screen"
          : "hidden",
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-label`}
      id={id}
      {...props}
    >
      <h2 id={`${id}-label`} className="sr-only">
        Mobile Navigation
      </h2>
      <div className="container-fluid py-2 flex justify-end">
        <button
          onClick={() => setIsOpen(false)}
          className="p-2"
          aria-label="Close Mobile Navigation"
          aria-expanded={isOpen}
          aria-controls={id}
        >
          <X className="size-10" />
        </button>
      </div>

      <ul className="w-full self-center flex-1 flex flex-col justify-center items-center gap-2 overflow-y-auto">
        {mainNav.map((page, index) => {
          const isActivePage = page.href === pathname;
          return (
            <li key={page.label} className={cn("container-fluid max-w-xs")}>
              <Link
                href={page.href}
                variant="h6"
                underline="none"
                className={cn(
                  "block text-center py-4",
                  isActivePage && "font-extrabold pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
                aria-current={isActivePage ? "page" : undefined}
              >
                {page.label}
              </Link>
              {index < mainNav.length - 1 && (
                <Separator className="bg-current" />
              )}
            </li>
          );
        })}
      </ul>
      <SocialLinks className="self-center py-4" />
    </div>
  );
}
