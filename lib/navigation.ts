import { routes } from "./routes";

export type NavItem = {
  label: string;
  href: (typeof routes)[keyof typeof routes];
};

export const mainNav: readonly NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Services", href: routes.services },
  { label: "Calendars", href: routes.calendars },
  { label: "Weddings", href: routes.weddings },
  { label: "Portraits", href: routes.portraits },
  { label: "Fashion", href: routes.fashion },
  { label: "Fine Art", href: routes.fineArt },
  { label: "Travel", href: routes.travel },
  { label: "Videoclips", href: routes.videoclips },
  { label: "Workshops", href: routes.workshops },
  { label: "Contact", href: routes.contact },
];
