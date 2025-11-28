import { PhotoGallery } from "@/components/photo-gallery";
import { weddingGallery } from "@/lib/wedding-gallery";

export default function WeddingsPage() {
  return <PhotoGallery photos={weddingGallery} />;
}
