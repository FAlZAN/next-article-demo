import React from "react";

interface IProductTitlePrice {
  title: string;
  price: number;
}

const ProductTitlePrice = ({ title, price }: IProductTitlePrice) => {
  return (
    <div className="title_price">
      <h3>{title}</h3>
      <p className="text-black/70">₹{price}</p>
    </div>
  );
};

export default ProductTitlePrice;
