"use client";

import { Link } from "@/components/link";
import { Typography } from "@/components/typohraphy";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";
import { ChevronDown } from "lucide-react";
import { useMemo } from "react";
import { useActivePage } from "../hooks/use-active-page";

type DesktopMenuTriggerProps = React.ComponentProps<"button"> & {
  open?: boolean;
};

export function DesktopMenuTrigger({
  open,
  className,
  ...props
}: DesktopMenuTriggerProps) {
  const activePage = useActivePage();
  return (
    <button
      className={cn("cursor-pointer group w-34 p-2", className)}
      aria-label={`Current page: ${activePage?.label}. Toggle navigation menu.`}
      {...props}
    >
      <div className="flex justify-between items-center gap-2 border-b border-current">
        <Typography
          variant="h6"
          component="h2"
          className="font-bold"
          disableGutters
        >
          {activePage?.label}
        </Typography>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </div>
    </button>
  );
}

export function DesktopMenu({
  setOpen,
  className,
}: {
  setOpen: (open: boolean) => void;
  className?: string;
}) {
  const activePage = useActivePage();

  const inactivePages = useMemo(() => {
    return mainNav.filter((page) => page.href !== activePage?.href);
  }, [activePage]);

  return (
    <ul className={cn("flex flex-col", className)}>
      {inactivePages.map((page) => (
        <li
          key={page.label}
          className={cn(
            typography({ variant: "h6", disableGutters: true }),
            "font-bold",
          )}
        >
          <Link
            href={page.href}
            className="block p-2 no-underline"
            onClick={() => setOpen(false)}
          >
            {page.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
