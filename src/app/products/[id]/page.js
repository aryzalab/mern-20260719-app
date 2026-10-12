import { getProductById } from "@/api/products";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";

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
          <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
            <div className="swiper-slide">
              <div className="block">
                <Image
                  src={product.imageUrls[0]}
                  alt="Summer Travel Bag image"
                  className="max-lg:mx-auto rounded-2xl object-cover"
                  height={1500}
                  width={1500}
                />
              </div>
            </div>
            <div className="flex gap-4">
              {product.imageUrls.map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt="Summer Travel Bag image"
                  className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-primary object-cover h-20 w-20"
                  height={500}
                  width={500}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="pro-detail w-full max-lg:max-w-152 lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
              <div className="flex items-center justify-between gap-6 mb-6">
                <div className="text">
                  <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="font-normal text-base text-gray-500">
                    {product.brand}
                  </p>
                </div>
                <button className="group transition-all duration-500 p-0.5">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100"
                      cx={30}
                      cy={30}
                      r={30}
                      fill
                    />
                    <path
                      className="stroke-primary transition-all duration-500 group-hover:stroke-primary"
                      d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
                      stroke
                      strokeWidth="1.6"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                <div className="flex items-center">
                  <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
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
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_12657_16865)">
                      <path
                        d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                        fill="white"
                      />
                      <g clipPath="url(#clip1_12657_16865)">
                        <path
                          d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_12657_16865">
                        <rect width={18} height={18} fill="white" />
                      </clipPath>
                      <clipPath id="clip1_12657_16865">
                        <rect width={18} height={18} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-base font-medium text-white">4.8</span>
                </button>
              </div>
              <p className="font-medium text-lg text-gray-900 mb-2">Color</p>
              <div className="grid grid-cols-3 gap-6 mb-6 w-max">
                <div className="color-box group w-max">
                  <div className="flex items-center flex-col justify-center w-max">
                    <div className="h-10 w-10 rounded-full bg-gray-900"></div>
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
                <div className=" flex items-center justify-center border border-gray-400 rounded-full">
                  <button className="group py-[14px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    <svg
                      className="stroke-black group-hover:stroke-black"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 11H5.5"
                        stroke
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16.5 11H5.5"
                        stroke
                        strokeOpacity="0.2"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16.5 11H5.5"
                        stroke
                        strokeOpacity="0.2"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="font-semibold text-gray-900 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-900 text-center hover:text-primary outline-0 hover:placeholder:text-primary"
                    placeholder={1}
                  />
                  <button className="group py-[14px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    <svg
                      className="stroke-black group-hover:stroke-black"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 5.5V16.5M16.5 11H5.5"
                        stroke="#9CA3AF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 5.5V16.5M16.5 11H5.5"
                        stroke="black"
                        strokeOpacity="0.2"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 5.5V16.5M16.5 11H5.5"
                        stroke="black"
                        strokeOpacity="0.2"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <button className="group py-3 px-5 rounded-full bg-indigo-50 text-primary font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-100">
                  <FaRegHeart />
                  Add to favourites
                </button>
              </div>
              <button className="text-center w-full px-5 py-4 rounded-[100px] bg-primary flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-primary hover:shadow-indigo-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
