import { HeroGallery } from "@/components/hero-gallery";
import { PhotoGallery } from "@/components/photo-gallery";
import { getHomepageData } from "@/data/homepage";

export default async function Home() {
  const homepageData = await getHomepageData();

  const heroGalleryImages = homepageData.data.heroGallery.images ?? [];

  const photoGalleryImages = homepageData.data.imageGallery.images ?? [];

  return (
    <>
      {heroGalleryImages && heroGalleryImages.length > 0 && (
        <HeroGallery images={heroGalleryImages} />
      )}
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </>
  );
}
