import React from "react";
import ProductDetails from "../product_details/ProductDetails";
import ProductImage from "../product_image/ProductImage";
import { IProduct } from "@/types/IProduct";
import Link from "next/link";

interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="card">
        <ProductImage image_src={product.image} />
        <ProductDetails product={product} />
      </div>
    </Link>
  );
};

export default ProductCard;
