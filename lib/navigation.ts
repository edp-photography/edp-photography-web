import { routes } from "./routes";

export type NavItem = {
  label: string;
  href: (typeof routes)[keyof typeof routes];
};

export const mainNav: readonly NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
  { label: "Workshops", href: routes.workshops },
  { label: "Weddings", href: routes.weddings },
  { label: "Calendars", href: routes.calendars },
  { label: "Videoclips", href: routes.videoclips },
  { label: "Prices", href: routes.prices },
];
