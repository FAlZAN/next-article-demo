"use client";
import { useRouter } from "next/navigation";
import PrimaryButton from "../primary_button/PrimaryButton";
import SecondaryButton from "../secondary_button/SecondaryButton";

const ProductButtons = ({ selectedSize }: { selectedSize: null | string }) => {
  const router = useRouter();

  const handleBuyNowClick = () => {
    if (selectedSize) {
      router.push("/bag");
    }
  };

  return (
    <div className="product_buttons">
      <PrimaryButton onClick={handleBuyNowClick}>Buy Now</PrimaryButton>
      <SecondaryButton>Add to Bag</SecondaryButton>
    </div>
  );
};

export default ProductButtons;
