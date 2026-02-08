import { PhotoGallery } from "@/components/photo-gallery";
import { getFashionPage } from "@/data/fashion";

export default async function FashionPage() {
  const fashionPage = await getFashionPage();

  const photoGalleryImages = fashionPage.data.imageGallery?.images ?? [];
  return (
    <section>
      {photoGalleryImages && photoGalleryImages.length > 0 && (
        <PhotoGallery images={photoGalleryImages} />
      )}
    </section>
  );
}
