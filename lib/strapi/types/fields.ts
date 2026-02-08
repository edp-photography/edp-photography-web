type StrapiImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number; // in KB
  url: string;
};

export type StrapiImageFormats =
  | Partial<{
      thumbnail: StrapiImageFormat;
      small: StrapiImageFormat;
      medium: StrapiImageFormat;
      large: StrapiImageFormat;
    }>
  | undefined;

export type StrapiImage = {
  documentId: string;
  id: string | number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: unknown;
  hash: string;
  ext?: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: unknown;
  createdAt?: string;
  updatedAt?: string;
  publishedAt: string;
  related: unknown;
};

export type StrapiMedia = StrapiImage;
