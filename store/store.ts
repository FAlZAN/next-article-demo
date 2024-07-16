import { ICartAction, ICartState } from "@/types/ICart";
import { create } from "zustand";

const useCart = create<ICartState & ICartAction>((set) => ({
  items: [],
  addToBag: (product) => {
    set((state) => {
      const existing_item = state.items.find(
        (item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
      );

      if (!!existing_item) {
        return {
          items: state.items.map((item) =>
            item.id === product.id && item.selectedSize === product.selectedSize
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          ),
        };
      }

      return { items: [...state.items, product] };
    });
  },
  updateSize: (id, prevSize, newSize) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.selectedSize === prevSize
          ? { ...item, selectedSize: newSize }
          : item
      ),
    })),
  updateQuantity: (id, selectedSize, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, quantity }
          : item
      ),
    })),
  removeFromBag: (id, selectedSize) =>
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.selectedSize === selectedSize && item.id === id)
      ),
    })),
  clearBag: () => set({ items: [] }),
}));

export default useCart;
