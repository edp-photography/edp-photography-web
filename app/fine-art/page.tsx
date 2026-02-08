import { PhotoGallery } from "@/components/photo-gallery";
import { getFineArtPage } from "@/data/fine-art";

export default async function FineArtPage() {
  const fineArtPage = await getFineArtPage();

  const photoGalleryImages = fineArtPage.data.imageGallery?.images ?? [];

  return (
    <section>
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </section>
  );
}
