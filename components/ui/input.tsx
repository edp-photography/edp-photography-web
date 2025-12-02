import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        /* Layout */
        "w-full min-w-0 h-9 px-3 py-1 file:inline-flex file:h-7",
        /* Positioning */
        /* Typography */
        "font-sans text-sm file:text-sm file:font-medium placeholder:text-muted-foreground file:text-foreground",
        /* Visual styles / Appearance */
        "bg-transparent dark:bg-input/30 file:bg-transparent",
        "border-b border-foreground file:border-0 rounded-0",
        /* Interactivity */
        "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "selection:bg-primary selection:text-primary-foreground",
        /* Transitions & animations */
        "transition-colors",
        /* State variants */
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export { Input };
