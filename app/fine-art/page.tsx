import { PhotoGallery } from "@/components/photo-gallery";
import { getFineArtPage } from "@/data/fine-art";
import { resolveStrapiMediaUrl } from "@/lib/strapi/utils";

export default async function FineArtPage() {
  const fineArtPage = await getFineArtPage();

  const photoGalleryImages = fineArtPage.data.imageGallery?.images?.map(
    (image) => ({
      title: image.title,
      description: image.description,
      alt: image.image.alternativeText ?? "",
      src: resolveStrapiMediaUrl(image.image.url),
      width: image.image.width!,
      height: image.image.height!,
    })
  );

  return (
    <section>
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </section>
  );
}
