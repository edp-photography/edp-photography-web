import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <Container
      component="footer"
      className="w-full py-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-between"
    >
      {/* Copyright - order-1 on mobile, order-first on lg */}
      <Link
        href="/"
        underline="none"
        variant="h6"
        className="font-bold p-2 order-3 lg:order-1"
      >
        © EMANUEL DELLA PIA
      </Link>

      {/* Social Links - order-2 on mobile, centered on lg */}
      <div className="flex gap-1 order-1 lg:order-2">
        <Link
          external
          href="https://instagram.com"
          variant="inherit"
          underline="none"
          className="p-2"
        >
          <FaInstagram className="size-6" />
        </Link>
        <Link
          external
          href="https://www.youtube.com/"
          variant="inherit"
          underline="none"
          className="p-2"
        >
          <FaYoutube className="size-6" />
        </Link>
        <Link
          external
          href="https://www.facebook.com/"
          variant="inherit"
          underline="none"
          className="p-2"
        >
          <FaFacebookF className="size-5" />
        </Link>
      </div>

      {/* Links - order-3 on mobile, order-last on lg (right) */}
      <Link
        href="/contact"
        underline="none"
        variant="h6"
        className="font-bold p-2 order-3 lg:order-3"
      >
        CONTACT
      </Link>
    </Container>
  );
}
