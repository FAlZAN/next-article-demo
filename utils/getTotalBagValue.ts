import { IProductBag } from "@/types/IProductBag";

export const getTotalBagValue = (arr: IProductBag[]) => {
  let total_bag_value = 0;

  arr.forEach((item) => (total_bag_value += item.price * item.quantity));

  return total_bag_value;
};
