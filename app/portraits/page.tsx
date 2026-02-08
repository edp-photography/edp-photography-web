import { PhotoGallery } from "@/components/photo-gallery";
import { getPortraitsPage } from "@/data/portraits";
import { toAbsoluteUrl } from "@/lib/strapi/utils";

export default async function PortraitsPage() {
  const portraitsPage = await getPortraitsPage();

  const photoGalleryImages = portraitsPage.data.imageGallery?.images?.map(
    (image) => ({
      title: image?.title,
      description: image?.description,
      alt: image?.image?.alternativeText ?? "",
      src: toAbsoluteUrl(image?.image.url),
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
