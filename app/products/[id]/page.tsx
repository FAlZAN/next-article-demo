import React from "react";
import { IProduct } from "@/types/IProduct";
import ProductImage from "@/components/product_image/ProductImage";
import ProductDetails from "@/components/product_details/ProductDetails";

const fetchProduct = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!response.ok) {
    throw new Error("failed to fetch product");
  }
  return response.json();
};

const page = async ({ params }: { params: { id: string } }) => {
  const product: IProduct[] = await fetchProduct(params.id);

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="product_image_complete">
        <ProductImage image_src={product[0].image} />
      </div>
      <ProductDetails type="complete" product={product[0]} />
    </section>
  );
};

export default page;
