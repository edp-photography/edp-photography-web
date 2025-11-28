"use client";

import {
  Photo,
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";
import { GalleryImage } from "./gallery-image";

interface IPhoto extends Photo {
  title?: string;
  description?: string;
  blurDataURL?: string;
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height, index }: RenderImageContext<IPhoto>
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
      blurDataURL={photo.blurDataURL}
    />
  );
}

type PhotoGalleryProps = {
  photos: IPhoto[];
};

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        spacing={0}
        padding={0}
        targetRowHeight={(containerWidth) => {
          return containerWidth < 640
            ? containerWidth / 0.75
            : containerWidth / 2.25;
        }}
        rowConstraints={(containerWidth) => {
          return containerWidth < 640
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
