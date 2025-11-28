import { PhotoGallery } from "@/components/photo-gallery";
import { homeGallery } from "@/lib/home-gallery";
import { HeroGallery } from "./components/hero-gallery";

export default function Home() {
  return (
    <>
      <HeroGallery />
      <PhotoGallery photos={homeGallery} />
    </>
  );
}
