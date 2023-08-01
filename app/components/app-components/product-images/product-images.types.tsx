export type ProductImage = {
  thumbnail_link?: string;
  thumbnail_height?: number;
  thumbnail_weight?: number;
  url_link?: string;
  original_height?: number;
  original_weight?: number;
  index?: number;
};

export type ProductImagesType = {
  images: ProductImage[];
  enableZoom?: boolean;
};

export type ImagesStateType = {
  productImages: ProductImage[];
  isMediaReady: boolean;
  selectedImage: string;
};
