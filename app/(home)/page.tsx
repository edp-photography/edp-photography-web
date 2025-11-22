import { Gallery } from "./components/gallery";
import { HeroGallery } from "./components/hero-gallery";

export default function Home() {
  return (
    <div>
      <HeroGallery />
      <Gallery />
    </div>
  );
}
