export type Product = {
  category: string;
  subcategory: string;
  name: string;
  amount: number;
  number_of_parts: number;
  discounted_price: number;
  selling_price: number;
  currency: string;
  description: string;
  created_at: string;
  google_review: {
    rate: string;
    text: string;
  };
};
