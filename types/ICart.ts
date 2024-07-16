interface ICartItem {
  id: string;
  image: string;
  title: string;
  sizes: string[];
  selectedSize: string;
  price: number;
  quantity: number;
}

export interface ICartState {
  items: [] | ICartItem[];
}

export interface ICartAction {
  addToBag: (product: ICartItem) => void;
  updateSize: (id: string, prevSize: string, newSize: string) => void;
  updateQuantity: (id: string, selectedSize: string, quantity: number) => void;
  removeFromBag: (id: string, selectedSize: string) => void;
  clearBag: () => void;
}
