import { typography } from "@/lib/variants/typography";
import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        /* Layout */
        "min-h-16 w-full px-3 py-2",
        /* Positioning */
        "flex field-sizing-content",
        /* Typography */
        typography({ variant: "body1", disableGutters: true }),
        "placeholder:text-muted-foreground",
        /* Visual styles / Appearance */
        "border-b border-foreground/30 rounded-0",
        "dark:bg-input/30 bg-transparent outline-none",
        /* Interactivity */
        "focus-visible:border-foreground focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        /* Transitions & animations */
        "transition-colors",
        /* State variants */
        "disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
