import { MarkdownRenderer } from "@/components/markdown-renderer";
import { PolaroidShuffle } from "@/components/polaroid-shuffle";
import { getAboutPage } from "@/data/about";

export default async function AboutPage() {
  const aboutPage = await getAboutPage();

  const markdown = aboutPage?.data?.content;
  const images = aboutPage?.data?.imageGallery?.images;

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
            <MarkdownRenderer markdown={markdown} />
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 md:shrink-0 md:w-1/2 flex justify-center">
          <div className="w-full max-w-xl">
            <PolaroidShuffle images={images ?? []} />
          </div>
        </div>
      </div>
    </section>
  );
}
