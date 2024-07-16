import { IProductBag } from "@/types/IProductBag";

export const getItemsCountBag = (arr: IProductBag[]) => {
  let items_count = 0;

  arr.forEach((element) => {
    items_count += element.quantity;
  });

  return items_count;
};
