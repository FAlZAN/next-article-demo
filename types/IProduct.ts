export interface IProduct {
  _id: string;
  id: string;
  category: string;
  product_type: string;
  title: string;
  description: string;
  sizes: string[];
  color: string;
  image: string;
  price: number;
}
