export type StrapiImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number; // in KB
  url: string;
};

export type StrapiImageFormats = Partial<{
  thumbnail: StrapiImageFormat;
  small: StrapiImageFormat;
  medium: StrapiImageFormat;
  large: StrapiImageFormat;
}>;

export type StrapiImage = {
  id: number;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats?: StrapiImageFormats | null;
  url: string;
};
