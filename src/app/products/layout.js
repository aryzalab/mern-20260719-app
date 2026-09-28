import React from "react";
import ProductBanner from "./_components/ProductBanner";

function ProductsLayout({ children }) {
  return (
    <>
      <ProductBanner />
      {children}
    </>
  );
}

export default ProductsLayout;
