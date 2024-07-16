export interface IProductBag {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  sizes: string[];
  selectedSize: string;
}
