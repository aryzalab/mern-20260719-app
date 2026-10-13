import { getProductById } from "@/api/products";
import Image from "next/image";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import ImageViewer from "./_components/ImageViewer";
import ProductDescription from "./_components/ProductDescription";
import AddToCart from "../_components/AddToCart";

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
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ImageViewer imageUrls={product.imageUrls} />
          <div className="flex justify-center items-center">
            <div className="pro-detail w-full max-lg:max-w-152 lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
              <div className="flex items-center justify-between gap-6 mb-6">
                <div className="text">
                  <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h2>
                  <p className="font-normal text-base text-gray-500 dark:text-white">
                    {product.brand}
                  </p>
                </div>
              </div>
              <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                <div className="flex items-center">
                  <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 dark:text-white">
                    Rs. {product.price}{" "}
                  </h5>
                  <span className="ml-3 font-semibold text-lg text-primary">
                    30% off
                  </span>
                </div>
                <svg
                  className="mx-5 max-[400px]:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width={2}
                  height={36}
                  viewBox="0 0 2 36"
                  fill="none"
                >
                  <path d="M1 0V36" stroke="#E5E7EB" />
                </svg>
                <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
                  <FaStar className="text-white" />
                  <span className="text-base font-medium text-white">4.8</span>
                </button>
              </div>
              <p className="font-medium text-lg text-gray-900 mb-2 dark:text-white">
                Color
              </p>
              <div className="grid grid-cols-3 gap-6 mb-6 w-max">
                <div className="color-box group w-max">
                  <div className="flex items-center flex-col justify-center w-max">
                    <div className="h-10 w-10 rounded-full bg-black"></div>
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-primary ">
                      Black
                    </p>
                  </div>
                </div>
                <div className="color-box group w-max">
                  <div className="flex items-center flex-col justify-center w-max">
                    <div className="h-10 w-10 rounded-full bg-orange-600"></div>
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-primary ">
                      Orange
                    </p>
                  </div>
                </div>
                <div className="color-box group w-max">
                  <div className="flex items-center flex-col justify-center w-max">
                    <div className="h-10 w-10 rounded-full bg-blue-600"></div>
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-primary ">
                      Blue
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                <button className="py-2 px-5 rounded-xl bg-indigo-50 text-primary w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-100">
                  <FaRegHeart />
                  Add to favourites
                </button>
                <AddToCart product={product} />
              </div>
            </div>
          </div>
        </div>
        <ProductDescription description={product?.description} />
      </div>
    </section>
  );
}

export default ProductDetailsPage;
