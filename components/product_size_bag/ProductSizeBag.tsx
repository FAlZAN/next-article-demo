import React, { useState } from "react";
import { IProductBag } from "@/types/IProductBag";
import useCart from "@/store/store";

interface IProductSizeBag {
  product: IProductBag;
}

const ProductSizeBag = ({ product }: IProductSizeBag) => {
  const [currentSize, setCurrentSize] = useState(product.selectedSize);
  const updateSize = useCart((state) => state.updateSize);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentSize(event.target.value);
    updateSize(product.id, product.selectedSize, event.target.value);
  };

  return (
    <select
      className="product_size_bag"
      name="size"
      id="size"
      defaultValue={currentSize}
      onChange={handleChange}
    >
      {product.sizes.map((size, index) => (
        <option key={index} value={size}>
          {size}
        </option>
      ))}
    </select>
  );
};

export default ProductSizeBag;
