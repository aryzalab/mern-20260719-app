import React from "react";

async function BlogDetailsPage({ params }) {
  const slugs = (await params).slug;

  return (
    <div>
      BlogDetailsPage: {slugs[0]} & {slugs[1]} & {slugs[2]}
    </div>
  );
}

export default BlogDetailsPage;
