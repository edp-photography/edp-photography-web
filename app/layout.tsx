import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { NavbarSpacer } from "@/components/layout/navbar-spacer";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { getGlobal } from "@/data/global";
import { routes } from "@/lib/routes";
import { toAbsoluteUrl } from "@/lib/strapi/utils";
import type { Metadata, Viewport } from "next";
import { Caveat, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // choose only what you need
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const { data: globalData } = await getGlobal();
  const seo = globalData.seo;
  const og = globalData.seo.openGraph;
  const ogImage = og?.ogImage ?? seo?.metaImage;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    robots: seo.metaRobots,
    alternates: {
      canonical: seo.canonicalURL,
    },
    openGraph: {
      title: og?.ogTitle ?? seo.metaTitle,
      description: og?.ogDescription ?? seo.metaDescription,
      url: og?.ogUrl ?? seo.canonicalURL,
      type:
        (og?.ogType as "website" | "article" | "book" | "profile") ?? "website",
      images: ogImage && [
        {
          url: toAbsoluteUrl(ogImage.url),
          width: ogImage.width,
          height: ogImage.height,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: og?.ogTitle ?? seo.metaTitle,
      description: og?.ogDescription ?? seo.metaDescription,
      images: ogImage && [
        {
          url: toAbsoluteUrl(ogImage.url),
          width: ogImage.width,
          height: ogImage.height,
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: LayoutProps<typeof routes.home>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.variable} ${geistMono.variable} ${caveat.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="min-h-screen flex flex-col">
            <NavbarSpacer />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          {process.env.NODE_ENV === "development" && (
            <div className="fixed bottom-5 right-5">
              <ModeToggle />
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
