import ProductCard from "@/components/product_card/ProductCard";
import { IProduct } from "@/types/IProduct";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("failed to fetch products");
  }

  return response.json();
};

export default async function Home() {
  const products = await fetchProducts();

  return (
    <section>
      <div className="grid grid-cols-1 gap-4  md:grid-cols-2  lg:grid lg:grid-cols-4">
        {products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
