import { PhotoGallery } from "@/components/photo-gallery";
import { getGlamourPage } from "@/data/glamour";
import { toAbsoluteUrl } from "@/lib/strapi/utils";

export default async function GlamourPage() {
  const glamourPage = await getGlamourPage();

  const photoGalleryImages = glamourPage.data.imageGallery?.images?.map(
    (image) => ({
      title: image.title,
      description: image.description,
      alt: image.image.alternativeText ?? "",
      src: toAbsoluteUrl(image.image.url),
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
