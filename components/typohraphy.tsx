import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline"
  | "inherit";

// this variant is reused for Link Component
export const typographyVariants = cva("font-sans antialiased", {
  variants: {
    variant: {
      h1: "text-3xl tracking-widest leading-relaxed uppercase",
      h2: "text-2xl tracking-widest leading-relaxed uppercase",
      h3: "text-xl tracking-widest leading-relaxed uppercase",
      h4: "text-lg tracking-widest leading-relaxed uppercase",
      h5: "text-base tracking-widest leading-relaxed uppercase",
      h6: "text-sm tracking-widest leading-relaxed uppercase",
      subtitle1: "text-base leading-relaxed",
      subtitle2: "text-sm leading-relaxed",
      body1: "text-base leading-relaxed",
      body2: "text-sm leading-relaxed",
      button: "text-sm uppercase tracking-wider",
      caption: "text-xs leading-snug",
      overline: "text-xs uppercase tracking-widest leading-snug",
      inherit: "",
    } satisfies Record<TypographyVariant, string>,
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
      inherit: "",
    },
    noWrap: {
      true: "overflow-hidden text-ellipsis whitespace-nowrap",
      false: "",
    },
  },
  defaultVariants: {
    variant: "body1",
    align: "inherit",
    noWrap: false,
  },
});

const typographyMarginVariants = cva("", {
  variants: {
    variant: {
      h1: "my-6",
      h2: "my-5",
      h3: "my-4",
      h4: "my-3",
      h5: "my-3",
      h6: "my-2",
      subtitle1: "my-3",
      subtitle2: "my-2",
      body1: "my-4",
      body2: "my-3",
      button: "my-2",
      caption: "my-1",
      overline: "my-1",
      inherit: "",
    } satisfies Record<TypographyVariant, string>,
  },
});

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  button: "span",
  caption: "span",
  overline: "span",
  inherit: "p",
} as const satisfies Record<TypographyVariant, ElementType>;

type VariantMapping = typeof variantMapping;

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants>,
    VariantProps<typeof typographyMarginVariants> {
  component?: ElementType;
  disableGutters?: boolean;
}

export const Typography = ({
  component,
  variant = "body1",
  align,
  noWrap,
  className,
  disableGutters = false,
  ...props
}: TypographyProps) => {
  const Component: ElementType =
    component ||
    (variant ? variantMapping[variant as keyof VariantMapping] : "p") ||
    "p";

  return (
    <Component
      className={cn(
        typographyVariants({ variant, align, noWrap }),
        !disableGutters && typographyMarginVariants({ variant }),
        className
      )}
      {...props}
    />
  );
};
