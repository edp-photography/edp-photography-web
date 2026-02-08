import { HeroGallery } from "@/components/hero-gallery";
import { PhotoGallery } from "@/components/photo-gallery";
import { getHomepageData } from "@/data/homepage";
import { toAbsoluteUrl } from "@/lib/strapi/utils";

export default async function Home() {
  const homepageData = await getHomepageData();

  const heroGalleryImages = homepageData.data.heroGallery.images;

  const photoGalleryImages = homepageData.data.imageGallery.images.map(
    (photoGalleryImage) => ({
      title: photoGalleryImage.title,
      description: photoGalleryImage.description,
      alt: photoGalleryImage.image.alternativeText ?? "",
      src: toAbsoluteUrl(photoGalleryImage.image.url),
      width: photoGalleryImage.image.width!,
      height: photoGalleryImage.image.height!,
    }),
  );

  return (
    <>
      <HeroGallery images={heroGalleryImages} />
      <PhotoGallery images={photoGalleryImages} />
    </>
  );
}
