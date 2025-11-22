import { AppLink } from "@/components/app-link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full px-6 py-6 flex flex-col items-center gap-4 lg:flex-row lg:relative">
      {/* Copyright - order-1 on mobile, order-first on lg */}
      <AppLink
        href="/"
        className="text-md font-bold tracking-widest order-3 lg:order-1"
      >
        © EMANUEL DELLA PIA
      </AppLink>

      {/* Social Links - order-2 on mobile, absolute centered on lg */}
      <div className="flex gap-1 order-1 lg:order-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
        <AppLink external href="https://instagram.com">
          <FaInstagram className="size-6" />
        </AppLink>
        <AppLink external href="https://www.youtube.com/">
          <FaYoutube className="size-6" />
        </AppLink>
        <AppLink external href="https://www.facebook.com/">
          <FaFacebookF className="size-5" />
        </AppLink>
      </div>

      {/* Links - order-3 on mobile, order-last on lg (right) */}
      <AppLink
        href="/contact"
        className="text-md font-bold tracking-widest order-2 lg:order-3 lg:ml-auto"
      >
        CONTACT
      </AppLink>
    </footer>
  );
}
