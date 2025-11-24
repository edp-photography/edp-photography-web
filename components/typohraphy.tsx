import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType } from "react";

const typographyVariants = cva("font-sans antialiased", {
  variants: {
    variant: {
      h1: "text-3xl tracking-widest leading-relaxed uppercase my-6",
      h2: "text-2xl tracking-widest leading-relaxed uppercase my-5",
      h3: "text-xl tracking-widest leading-relaxed uppercase my-4",
      h4: "text-lg tracking-widest leading-relaxed uppercase my-3",
      h5: "text-base tracking-widest leading-relaxed uppercase my-3",
      h6: "text-sm tracking-widest leading-relaxed uppercase my-2",
      subtitle1: "text-base leading-relaxed my-3",
      subtitle2: "text-sm leading-relaxed my-2",
      body1: "text-base leading-relaxed my-4",
      body2: "text-sm leading-relaxed my-3",
      button: "text-sm uppercase tracking-wider my-2",
      caption: "text-xs leading-snug my-1",
      overline: "text-xs uppercase tracking-widest leading-snug my-1",
      inherit: "",
    },
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
} as const;

type VariantMapping = typeof variantMapping;

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  component?: ElementType;
  variantMapping?: Partial<VariantMapping>;
}

export const Typography = ({
  component,
  variant = "body1",
  align,
  noWrap,
  className,
  variantMapping: customVariantMapping,
  ...props
}: TypographyProps) => {
  const mapping = customVariantMapping || variantMapping;
  const Component: ElementType =
    component ||
    (variant ? mapping[variant as keyof VariantMapping] : "p") ||
    "p";

  return (
    <Component
      className={cn(
        typographyVariants({ variant, align, noWrap }),
        className
      )}
      {...props}
    />
  );
};
