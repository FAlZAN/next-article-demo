import { IProductBag } from "@/types/IProductBag";
import { getTotalBagValue } from "@/utils/getTotalBagValue";

interface IBagTotalCard {
  items: IProductBag[];
}

const BagTotalCard = ({ items }: IBagTotalCard) => {
  const total_bag_value = getTotalBagValue(items);

  return (
    <div className="w-full max-w-96 mt-4 mx-auto py-6 px-4 border-y border-black/10  flex flex-col gap-1">
      <h3 className="mb-4 font-semibold">Bag Total</h3>

      <p className="text-sm font-medium  flex justify-between items-center">
        <span>Bag Subtotal</span>
        <span>₹{total_bag_value}</span>
      </p>

      <p className="text-sm font-bold  flex justify-between items-center">
        <span>Bag Total</span>
        <span>₹{total_bag_value}</span>
      </p>
    </div>
  );
};

export default BagTotalCard;
