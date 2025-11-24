import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const containerVariants = cva("w-full mx-auto", {
  variants: {
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      false: "",
    },
    disableGutters: {
      true: "",
      false: "px-7 2xl:px-26",
    },
  },
  defaultVariants: {
    maxWidth: false,
    disableGutters: false,
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      className,
      maxWidth,
      disableGutters,
      component: Component = "div",
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          containerVariants({ maxWidth, disableGutters }),
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
