import { cva } from "class-variance-authority";

export const typography = cva("font-sans antialiased", {
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
    },
    disableGutters: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    variant: "body1",
    disableGutters: false,
  },
  compoundVariants: [
    { variant: "h1", disableGutters: false, class: "my-6" },
    { variant: "h2", disableGutters: false, class: "my-5" },
    { variant: "h3", disableGutters: false, class: "my-4" },
    { variant: "h4", disableGutters: false, class: "my-3" },
    { variant: "h5", disableGutters: false, class: "my-3" },
    { variant: "h6", disableGutters: false, class: "my-2" },
    { variant: "subtitle1", disableGutters: false, class: "my-3" },
    { variant: "subtitle2", disableGutters: false, class: "my-2" },
    { variant: "body1", disableGutters: false, class: "my-4" },
    { variant: "body2", disableGutters: false, class: "my-3" },
    { variant: "button", disableGutters: false, class: "my-2" },
    { variant: "caption", disableGutters: false, class: "my-1" },
    { variant: "overline", disableGutters: false, class: "my-1" },
  ],
});
