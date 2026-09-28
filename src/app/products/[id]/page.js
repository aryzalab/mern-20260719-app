async function fetchProductById(id) {
  const product = await fetch(
    `https://mern-20251103-api.vercel.app/api/products/${id}`,
  ).then((res) => res.json());

  return product;
}

export const generateMetadata = async ({ params }) => {
  const productId = (await params).id;

  const product = await fetchProductById(productId);

  return {
    title: product.name,
    description: `${product.name} ${product.category} ${product.brand}`,
  };
};

async function ProductDetailsPage({ params, searchParams }) {
  const productId = (await params).id;
  const query = await searchParams;

  const product = await fetchProductById(productId);

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
