"use client";

function ErrorPage({ error }) {
  return <div>{error.message}</div>;
}

export default ErrorPage;
