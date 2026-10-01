import Link from "next/link";
import ProductCard from "./_components/ProductCard";
import { getProducts } from "@/api/products";

export const metadata = {
  title: "Products",
  description: "Electroshop products page",
};

async function ProductsPage() {
  const products = await getProducts()

  return (
    <section
      id="clothes"
      className="py-16 bg-primary/5 dark:bg-gray-950 dark:text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold">Popular Products</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
