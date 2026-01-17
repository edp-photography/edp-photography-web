import { PhotoGallery } from "@/components/photo-gallery";
import { getTravelPage } from "@/data/travel";
import { resolveStrapiMediaUrl } from "@/lib/strapi/utils";

export default async function TravelPage() {
  const travelPage = await getTravelPage();

  const photoGalleryImages = travelPage.data.imageGallery?.images?.map(
    (image) => ({
      title: image.title,
      description: image.description,
      alt: image.image.alternativeText ?? "",
      src: resolveStrapiMediaUrl(image.image.url),
      width: image.image.width!,
      height: image.image.height!,
    }),
  );

  return (
    <section>
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </section>
  );
}
