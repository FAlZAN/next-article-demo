import React from "react";
import Image from "next/image";

const ProductImage = ({ image_src }: { image_src: string }) => {
  return (
    <Image
      priority
      src={image_src}
      width={700}
      height={0}
      alt="product image"
    />
  );
};

export default ProductImage;
