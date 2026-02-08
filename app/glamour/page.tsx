import { PhotoGallery } from "@/components/photo-gallery";
import { getGlamourPage } from "@/data/glamour";

export default async function GlamourPage() {
  const glamourPage = await getGlamourPage();

  const photoGalleryImages = glamourPage.data.imageGallery?.images ?? [];

  return (
    <section>
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </section>
  );
}
