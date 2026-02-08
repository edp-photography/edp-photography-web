"use client";

import {
  Photo,
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";
import { GalleryImage } from "./components/gallery-image";

type PhotoGalleryImage = Photo & {
  title?: string;
  description?: string;
};

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height, index }: RenderImageContext<PhotoGalleryImage>,
) {
  return (
    <GalleryImage
      alt={alt}
      title={title}
      description={photo.description}
      sizes={sizes}
      src={photo.src}
      width={width}
      height={height}
      priority={index < 3}
    />
  );
}

type PhotoGalleryProps = {
  images: PhotoGalleryImage[];
};

export function PhotoGallery({ images }: PhotoGalleryProps) {
  return (
    <>
      <RowsPhotoAlbum
        photos={images}
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
