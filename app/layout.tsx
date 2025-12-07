import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { NavbarSpacer } from "@/components/layout/navbar-spacer";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { getGlobal } from "@/data/global";
import { routes } from "@/lib/routes";
import type { Metadata } from "next";
import { Geist_Mono, Lato } from "next/font/google";
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

export async function generateMetadata(): Promise<Metadata> {
  const { data: globalData } = await getGlobal();
  return {
    title: globalData.seo.metaTitle,
    description: globalData.seo.metaDescription,
    keywords: globalData.seo.keywords,
  };
}

export default async function RootLayout({
  children,
}: LayoutProps<typeof routes.home>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.variable} ${geistMono.variable} antialiased`}>
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
