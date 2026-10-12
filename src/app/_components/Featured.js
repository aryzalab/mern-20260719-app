import { getProducts } from "@/api/products";
import React from "react";
import ProductCard from "../products/_components/ProductCard";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/constants/routes";

const Featured = async () => {
  const products = await getProducts({
    filter: JSON.stringify({ limit: 4 }),
  });

  return (
    <section
      id="clothes"
      className="py-16 bg-blue-50 dark:bg-gray-950 dark:text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold">
          Featured Products
        </h2>
        <p className="text-center py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          rerum quas distinctio vitae id est ex provident nam quam omnis?
        </p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href={PRODUCTS_ROUTE}
            className="bg-white dark:bg-gray-800 border-2 border-primary px-10 py-2 rounded-2xl text-primary hover:underline"
          >
            View all →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
