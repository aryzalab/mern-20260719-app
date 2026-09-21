import { useParams } from "react-router";

const ProductDetailsPage = () => {
  const params = useParams();

  return <h1>ProductDetailsPage id: {params.productId}</h1>;
};

export default ProductDetailsPage;
