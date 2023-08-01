export type ProductCardType = {
  productCardInfo: ProductCardItem;
};

export type ProductCardItem = {
  title: string;
  selling_price: number;
  amount: number;
  cart_image: string;
  hover_image: string;
  url: string;
};
