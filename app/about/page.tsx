import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Typography } from "@/components/typohraphy";
import { getAboutPage } from "@/data/about";
import Image from "next/image";

export default async function AboutPage() {
  const aboutPage = await getAboutPage();

  const markdown = aboutPage?.data?.content;

  return (
    <section className="container-fluid mx-auto my-8">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-16">
        {/* Quote and Content */}
        <div className="order-2 md:order-1">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-tight mb-8 pl-8 md:pl-12 text-right">
            &ldquo;Photography is the story I fail to put into words.&rdquo;
          </blockquote>

          {/* Content Sections */}
          <div>
            <MarkdownRenderer markdown={markdown} />;
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 md:shrink-0 md:w-1/2 flex justify-center">
          <div className="w-full max-w-xl">
            <Image
              src="/images/about/2.jpg"
              alt="Emanuel Della Pia"
              width={1024}
              height={1024}
              className="w-full h-auto object-cover"
            />
            <Typography
              variant="caption"
              className="mt-2 text-xs uppercase tracking-wide"
            >
              PHOTOGRAPHING NELSON MANDELA IN CAPE TOWN, SOUTH AFRICA 1995 /
              PHOTOGRAPH BY CHRIS LAWRENCE
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
