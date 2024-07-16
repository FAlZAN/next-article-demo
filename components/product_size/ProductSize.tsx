"use client";
import clsx from "clsx";
import React from "react";

interface IProductSize {
  sizes: string[];
  selectedSize: null | string;
  getSelectedSize: (size: null | string) => void;
}

const ProductSize = ({
  sizes,
  selectedSize,
  getSelectedSize,
}: IProductSize) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    getSelectedSize(event.target.value);
  };

  return (
    <div className="product_size">
      {sizes.map((size, index) => (
        <React.Fragment key={index}>
          <input
            className="hidden"
            type="radio"
            name="product_size"
            id={size}
            value={size}
            onChange={handleValueChange}
          />

          <label
            className={clsx(
              "product_size_label",
              selectedSize === size.toString() && "product_size_label_active"
            )}
            htmlFor={size}
          >
            {size}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductSize;
