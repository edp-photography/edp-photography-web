import { PhotoGallery } from "@/components/photo-gallery";
import { getWorkshopsPage } from "@/data/workshops";
import { toAbsoluteUrl } from "@/lib/strapi/utils";

export default async function WorkshopsPage() {
  const workshopsPage = await getWorkshopsPage();

  const photoGalleryImages = workshopsPage.data.imageGallery?.images?.map(
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
    <div>
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </div>
  );
}
