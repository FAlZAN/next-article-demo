"use client";
import clsx from "clsx";
import HorizontalRule from "../horizontal_rule/HorizontalRule";
import ProductButtons from "../product_buttons/ProductButtons";
import ProductSize from "../product_size/ProductSize";
import ProductTitlePrice from "../product_title_price/ProductTitlePrice";
import { IProduct } from "@/types/IProduct";
import { FormEvent, useState } from "react";
import useCart from "@/store/store";

interface IProductDetails {
  type?: "complete";
  product: IProduct;
}

const ProductDetails = ({ type, product }: IProductDetails) => {
  const [selectedSize, setSelectedSize] = useState<null | string>(null);
  const addToBag = useCart((state) => state.addToBag);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedSize) {
      alert("please select a size.");
      return;
    }

    addToBag({
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      sizes: product.sizes,
      selectedSize,
      quantity: 1,
    });
  };

  const getSelectedSize = (size: null | string) => {
    setSelectedSize(size);
  };

  return (
    <form
      className={clsx(
        "product_details",
        type === "complete" && "product_details_complete"
      )}
      onSubmit={handleFormSubmit}
    >
      <ProductTitlePrice title={product.title} price={product.price} />
      {type === "complete" && (
        <>
          <ProductSize
            sizes={product.sizes}
            selectedSize={selectedSize}
            getSelectedSize={getSelectedSize}
          />
          <HorizontalRule />
          <ProductButtons selectedSize={selectedSize} />
        </>
      )}
    </form>
  );
};

export default ProductDetails;
