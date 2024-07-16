"use client";
import { useRouter } from "next/navigation";
import ProductCardBag from "@/components/product_card_bag/ProductCardBag";
import EmptyBag from "@/components/empty_bag/EmptyBag";
import useCart from "@/store/store";
import BagTotalCard from "@/components/bag_total_card/BagTotalCard";
import PrimaryButton from "@/components/primary_button/PrimaryButton";

const page = () => {
  const { items } = useCart((state) => ({ items: state.items }));
  const clearBag = useCart((state) => state.clearBag);
  const router = useRouter();

  const handlePlaceOrderClick = () => {
    router.push("/order-confirmed");
    clearBag();
  };

  return (
    <section className="max-w-96 mx-auto  flex-col-center gap-4">
      {items.length !== 0 ? (
        items.map((item, index) => (
          <ProductCardBag key={index} product={item} />
        ))
      ) : (
        <EmptyBag />
      )}

      {items.length !== 0 && (
        <>
          <BagTotalCard items={items} />
          <PrimaryButton onClick={handlePlaceOrderClick}>
            Place Order
          </PrimaryButton>
        </>
      )}
    </section>
  );
};

export default page;
