import { PhotoGallery } from "@/components/photo-gallery";
import { getFashionPage } from "@/data/fashion";
import { resolveStrapiMediaUrl } from "@/lib/strapi/utils";

export async function FashionPage() {
  const fashionPage = await getFashionPage();

  const photoGalleryImages = fashionPage.data.imageGallery?.images?.map(
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
