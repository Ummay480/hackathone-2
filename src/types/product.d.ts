export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  onSale?: boolean;
};
