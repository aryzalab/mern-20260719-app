import React from "react";

async function ProductReviewPage({ params }) {
  const reviewId = (await params).reviewId;
  const productId = (await params).id;

  return (
    <div>
      ProductReviewPage: productId={productId} and reviewId={reviewId}
    </div>
  );
}

export default ProductReviewPage;
