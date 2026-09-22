import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";

function ProductDetailsPage() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const params = useParams();

  async function fetchProductById() {
    try {
      const data = await fetch(
        `https://mern-20251103-api.vercel.app/api/products/${params.id}`,
      ).then((res) => res.json());

      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductById();
  }, []);

  if (loading) return <Loading />;

  return (
    <section>
      <div className="container">
        <img src={product.imageUrls[0]} alt="" width={"auto"} height={400} />
        <h1>Name:{product?.name}</h1>
        <h3>Brand: {product?.brand}</h3>
        <h4>Price: Rs. {product?.price}</h4>
        <p>{product?.description}</p>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
