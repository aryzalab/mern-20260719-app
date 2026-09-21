import React from "react";
import { useSearchParams } from "react-router";

function ProductsPage() {
  const searchParams = useSearchParams();

  return (
    <section>
      <h1>ProductsPage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        maiores ipsam illo voluptas possimus nihil consequuntur necessitatibus
        fuga, dolores impedit.
      </p>
      <h3>limit: {searchParams[0].get("limit")}</h3>
      <h3>offset: {searchParams[0].get("offset")}</h3>
      <button>View all products</button>
    </section>
  );
}

export default ProductsPage;
