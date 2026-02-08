import { PhotoGallery } from "@/components/photo-gallery";
import { getWeddingsPage } from "@/data/weddings";

export default async function WeddingsPage() {
  const portraitsPage = await getWeddingsPage();

  const photoGalleryImages = portraitsPage.data.imageGallery?.images ?? [];

  return (
    <section>
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </section>
  );
}
