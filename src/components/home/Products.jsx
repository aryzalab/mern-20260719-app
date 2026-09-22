import { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://mern-20251103-api.vercel.app/api/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section id="products">
      <div className="container">
        <h2>All Products</h2>
        <div className="products">
          {products.map((item) => (
            <ProductCard
              key={item._id}
              id={item._id}
              imageUrl={item.imageUrls[0]}
              name={item.name}
              brand={item.brand}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
