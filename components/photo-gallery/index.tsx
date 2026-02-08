"use client";

import { GalleryImage as GalleryImageType } from "@/lib/strapi/types/components";
import {
  Photo,
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";
import { GalleryImage as GalleryImageComponent } from "./components/gallery-image";

type PhotoGalleryProps = {
  images: GalleryImageType[];
};

export function PhotoGallery({ images }: PhotoGalleryProps) {
  // format to Photo with extended image data
  const photos: PhotoGalleryImage[] = images.map(
    ({ image, title, description }) => ({
      title: title,
      description: description,
      image: image, // pass image data so that we can use the different formats from Strapi
      width: image.width!,
      height: image.height!,
      src: "", // Needs to be passed for Photo interface compatibility but I won't use it, I will use image data
    }),
  );

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        spacing={0}
        padding={0}
        targetRowHeight={(containerWidth) => {
          return containerWidth < 768
            ? containerWidth / 0.75
            : containerWidth / 2.25;
        }}
        rowConstraints={(containerWidth) => {
          return containerWidth < 768
            ? {
                maxPhotos: 1,
                minPhotos: 1,
              }
            : { maxPhotos: 3, minPhotos: 1 };
        }}
      />
    </>
  );
}

type PhotoGalleryImage = Photo & GalleryImageType;

function renderNextImage(
  {}: RenderImageProps,
  { photo, width, height, index }: RenderImageContext<PhotoGalleryImage>,
) {
  return (
    <GalleryImageComponent
      title={photo.title}
      description={photo.description}
      image={photo.image}
      width={width}
      height={height}
      preload={index < 3}
    />
  );
}
