import { PhotoGallery } from "@/components/photo-gallery";
import { getPortraitsPage } from "@/data/portraits";

export default async function PortraitsPage() {
  const portraitsPage = await getPortraitsPage();

  const photoGalleryImages = portraitsPage.data.imageGallery?.images ?? [];

  return (
    <section>
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </section>
  );
}
