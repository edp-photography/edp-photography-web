import { PhotoGallery } from "@/components/photo-gallery";
import { getTravelPage } from "@/data/travel";

export default async function TravelPage() {
  const travelPage = await getTravelPage();

  const photoGalleryImages = travelPage.data.imageGallery?.images ?? [];

  return (
    <section>
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </section>
  );
}
