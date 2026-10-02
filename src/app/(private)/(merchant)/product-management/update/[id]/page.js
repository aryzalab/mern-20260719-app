import React from "react";
import ProductForm from "../../_components/Form";

const UpdateProductPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update product
        </h2>
        <ProductForm />
      </div>
    </section>
  );
};

export default UpdateProductPage;
