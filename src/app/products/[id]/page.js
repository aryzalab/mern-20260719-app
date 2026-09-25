async function ProductDetailsPage({ params, searchParams }) {
  const productId = (await params).id;
  const query = await searchParams;

  return (
    <div>
      ProductDetailsPage: {productId}, query={query.limit}
    </div>
  );
}

export default ProductDetailsPage;
