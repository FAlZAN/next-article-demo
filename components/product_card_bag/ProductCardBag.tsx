import React from "react";
import ProductImage from "../product_image/ProductImage";
import ProductTitlePrice from "../product_title_price/ProductTitlePrice";
import ProductSizeBag from "../product_size_bag/ProductSizeBag";
import ProductQuantity from "../product_quantity/ProductQuantity";
import useCart from "@/store/store";
import { IProductBag } from "@/types/IProductBag";

interface IProductCardBag {
  product: IProductBag;
}

const ProductCardBag = ({ product }: IProductCardBag) => {
  const removeFromBag = useCart((state) => state.removeFromBag);

  const handleRemoveClick = () => {
    removeFromBag(product.id, product.selectedSize);
  };

  return (
    <div className="product_card_bag">
      <div className="product_image_bag">
        <ProductImage image_src={product.image} />
      </div>

      <div className="product_details_bag">
        <ProductTitlePrice title={product.title} price={product.price} />

        <div className="flex gap-4">
          <ProductSizeBag product={product} />
          <ProductQuantity product={product} />
        </div>

        <button
          type="button"
          className="remove_button"
          onClick={handleRemoveClick}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCardBag;
