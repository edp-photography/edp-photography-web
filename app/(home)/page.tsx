import { HeroGallery } from "@/components/hero-gallery";
import { PhotoGallery } from "@/components/photo-gallery";
import { getHomepageData } from "@/data/homepage";
import { homeGallery } from "@/lib/home-gallery";
import { resolveStrapiMediaUrl } from "@/lib/strapi/utils";

export default async function Home() {
  const homepageData = await getHomepageData();

  if (!homepageData) {
    throw new Error("homepageData is undefined");
  }

  const heroGalleryImages = homepageData.data.heroGallery.images;

  if (!heroGalleryImages) {
    throw new Error("heroGalleryImages is undefined");
  }

  const images = heroGalleryImages.map((heroGalleryImage) => ({
    title: heroGalleryImage.title,
    description: heroGalleryImage.description,
    alt: heroGalleryImage.image.alternativeText,
    url: resolveStrapiMediaUrl(heroGalleryImage.image.url),
  }));

  return (
    <>
      <HeroGallery images={images} />
      <PhotoGallery photos={homeGallery} />
    </>
  );
}
