import { Link } from "@/components/link";
import { contact } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons/lib";

const iconMap: Record<(typeof contact.socials)[number]["icon"], IconType> = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  facebook: FaFacebookF,
};

export function SocialLinks({
  className,
  ...props
}: Omit<React.HTMLAttributes<HTMLUListElement>, "children">) {
  return (
    <ul className={cn("flex gap-1", className)} {...props}>
      {contact.socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <li key={social.name}>
            <Link
              external
              href={social.url}
              variant="inherit"
              underline="none"
              className="inline-block p-2"
              aria-label={social.name}
            >
              <Icon className="size-6" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
