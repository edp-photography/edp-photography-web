import { YoutubeGallery } from "@/components/youtube-gallery";
import { getVideoclipsPage } from "@/data/videoclips";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";

export default async function VideoclipsPage() {
  const videoclips = await getVideoclipsPage();

  const youtubeGalleryItems = videoclips.data?.youtubeGallery?.youtubeEmbeds;

  return (
    <section className="container-fluid mx-auto my-8">
      <h2 className={cn(typography({ variant: "h2" }), "mb-8 text-center")}>
        VIDEOCLIPS
      </h2>
      {youtubeGalleryItems && <YoutubeGallery items={youtubeGalleryItems} />}
    </section>
  );
}
