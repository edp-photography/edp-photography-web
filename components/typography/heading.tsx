import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva("font-semibold tracking-widest uppercase", {
  variants: {
    level: {
      1: "text-5xl",
      2: "text-4xl",
      3: "text-3xl",
      4: "text-2xl",
      5: "text-xl",
      6: "text-lg",
    } satisfies Record<1 | 2 | 3 | 4 | 5 | 6, string>,
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({
  as,
  level,
  className,
  children,
  ...props
}: HeadingProps) => {
  const Component = as;
  return (
    <Component className={cn(headingVariants({ level }), className)} {...props}>
      {children}
    </Component>
  );
};
