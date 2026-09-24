import Image from "next/image";

async function fetchProducts() {
  try {
    const data = await fetch(
      "https://mern-20260719-api.vercel.app/api/products",
    ).then((res) => res.json());

    return data;
  } catch (error) {
    throw error;
  }
}

async function HomePage() {
  const data = await fetchProducts();

  console.log(data);

  return (
    <div>
      <h1 className="text-5xl font-black">Home page</h1>
      <ol>
        {data?.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default HomePage;
