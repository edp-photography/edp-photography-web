import { PhotoGallery } from "@/components/photo-gallery";
import { getWorkshopsPage } from "@/data/workshops";

export default async function WorkshopsPage() {
  const workshopsPage = await getWorkshopsPage();

  const photoGalleryImages = workshopsPage.data.imageGallery?.images ?? [];

  return (
    <div>
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </div>
  );
}
