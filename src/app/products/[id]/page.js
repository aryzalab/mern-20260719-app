import { getProductById } from "@/api/products";


export const generateMetadata = async ({ params }) => {
  const productId = (await params).id;

  const product = await getProductById(productId);

  return {
    title: product.name,
    description: `${product.name} ${product.category} ${product.brand}`,
  };
};

async function ProductDetailsPage({ params, searchParams }) {
  const productId = (await params).id;
  const query = await searchParams;

  const product = await getProductById(productId);

  return (
    <pre>
      ProductDetailsPage:
      <div>Name: {product?.name}</div>
      <div>Category: {product?.category}</div>
      <div>Brand: {product?.brand}</div>
      <div>Price: {product?.price}</div>
    </pre>
  );
}

export default ProductDetailsPage;
