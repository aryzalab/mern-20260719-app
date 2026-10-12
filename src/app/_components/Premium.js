import { getProducts } from "@/api/products";
import Image from "next/image";
import React from "react";

const Premium = async () => {
  const products = await getProducts({
    filter: JSON.stringify({ limit: 4, category: "Smartphones" }),
  });

  return (
    <section id="shoes" className="py-16 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold">
          Premium Smartphones
        </h2>
        <p className="text-center py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          rerum quas distinctio vitae id est ex provident nam quam omnis?
        </p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl overflow-hidden relative group"
            >
              <Image
                src={product.imageUrls[0] ?? "/assets/images/placeholder.jpg"}
                alt={product.name}
                className="w-full h-64 object-cover"
                height={400}
                width={600}
              />
              <div className="h-full w-full bg-black/20 group-hover:bg-black/50 absolute top-0" />
              <div className="p-5 absolute bottom-0 text-white hidden group-hover:block">
                <span className="bg-primary text-white text-sm px-3 py-0.5 rounded-xl">
                  {product.brand}
                </span>
                <h4 className="font-medium text-xl">{product.name}</h4>
                <p>
                  ⭐️⭐️⭐️⭐️ <span className="text-sm">(23 reviews)</span>
                </p>
                <h5 className="text-primary text-2xl font-semibold my-2">
                  Rs. {product.price}
                </h5>
                <button className="bg-primary w-full px-5 py-2 text-white rounded-xl">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Premium;
