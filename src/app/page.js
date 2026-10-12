import Image from "next/image";
import Featured from "./_components/Featured";
import Premium from "./_components/Premium";
import Link from "next/link";
import { CONTACT_ROUTE } from "@/constants/routes";

function HomePage() {
  return (
    <>
      <section
        id="hero"
        className="relative py-24 h-screen bg-[url('/assets/images/fashion.jpg')] w-auto bg-center bg-cover bg-no-repeat"
      >
        {/* Overlay */}
        <div className="h-screen w-full bg-black/50 absolute top-0 left-0" />
        <div className="container mx-auto px-4 relative z-5">
          <h1 className="text-center text-white text-6xl lg:text-9xl font-medium mt-24">
            Explore our latest fashion today!
          </h1>
          <p className="text-gray-200 text-center py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui
            dignissimos recusandae, laboriosam quas sit dolorem fuga dolor error
            iusto in quaerat facilis amet adipisci voluptatem soluta? Dolorum,
            nisi corporis.
          </p>
          <div className="flex justify-center">
            <button className="bg-primary text-white px-10 py-4 rounded-xl hover:bg-primary text-lg">
              Explore Now!
            </button>
          </div>
        </div>
      </section>
      <section id="partners" className="py-16 dark:bg-gray-900 dark:text-white">
        <h2 className="text-center text-3xl font-semibold">
          Our Trusted Parners
        </h2>
        <p className="text-center py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          rerum quas distinctio vitae id est ex provident nam quam omnis?
        </p>
        <div className="flex gap-10 overflow-scroll w-full py-8 px-4">
          <div className="partners-card">
            <img
              src="assets/images/nike.png"
              alt="Nike"
              className="dark:hidden"
            />
            <img
              src="assets/images/nike-light.png"
              alt="Nike"
              className="hidden dark:block"
            />
          </div>
          <div className="partners-card">
            <img
              src="assets/images/adidas.png"
              alt="Adidas"
              className="dark:hidden"
            />
            <img
              src="assets/images/adidas-light.png"
              alt="Adidas"
              className="hidden dark:block"
            />
          </div>
          <div className="partners-card">
            <img
              src="assets/images/nike.png"
              alt="Nike"
              className="dark:hidden"
            />
            <img
              src="assets/images/nike-light.png"
              alt="Nike"
              className="hidden dark:block"
            />
          </div>
          <div className="partners-card">
            <img
              src="assets/images/adidas.png"
              alt="Adidas"
              className="dark:hidden"
            />
            <img
              src="assets/images/adidas-light.png"
              alt="Adidas"
              className="hidden dark:block"
            />
          </div>
          <div className="partners-card">
            <img
              src="assets/images/nike.png"
              alt="Nike"
              className="dark:hidden"
            />
            <img
              src="assets/images/nike-light.png"
              alt="Nike"
              className="hidden dark:block"
            />
          </div>
          <div className="partners-card">
            <img
              src="assets/images/adidas.png"
              alt="Adidas"
              className="dark:hidden"
            />
            <img
              src="assets/images/adidas-light.png"
              alt="Adidas"
              className="hidden dark:block"
            />
          </div>
          <div className="partners-card">
            <img
              src="assets/images/nike.png"
              alt="Nike"
              className="dark:hidden"
            />
            <img
              src="assets/images/nike-light.png"
              alt="Nike"
              className="hidden dark:block"
            />
          </div>
          <div className="partners-card">
            <img
              src="assets/images/adidas.png"
              alt="Adidas"
              className="dark:hidden"
            />
            <img
              src="assets/images/adidas-light.png"
              alt="Adidas"
              className="hidden dark:block"
            />
          </div>
          <div className="partners-card">
            <img
              src="assets/images/nike.png"
              alt="Nike"
              className="dark:hidden"
            />
            <img
              src="assets/images/nike-light.png"
              alt="Nike"
              className="hidden dark:block"
            />
          </div>
          <div className="partners-card">
            <img
              src="assets/images/adidas.png"
              alt="Adidas"
              className="dark:hidden"
            />
            <img
              src="assets/images/adidas-light.png"
              alt="Adidas"
              className="hidden dark:block"
            />
          </div>
        </div>
      </section>

      <Featured />
      <Premium />
      <section id="cta" className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl text-white">
            Need assistance on your fashion? <br />
            Feel free to reach us!
          </h2>
          <p className="text-gray-200 py-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nam voluptate dolorum saepe enim nesciunt minus quam repudiandae
            totam, modi sequi, veritatis in? Culpa soluta corrupti adipisci
            quisquam at rerum!
          </p>
          <Link
            href={CONTACT_ROUTE}
            className="bg-white dark:bg-gray-800 px-10 py-3 text-primary rounded-2xl hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
            <h2 className="text-4xl text-center font-bold text-gray-900 lg:text-left">
              Testimonials{" "}
            </h2>
            {/* Slider controls */}
            <div className="flex items-center gap-8">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex justify-center items-center border border-primary !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-primary "
                data-carousel-prev
              >
                <svg
                  className="h-6 w-6 text-primary group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex justify-center items-center border border-primary !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-primary"
                data-carousel-next
              >
                <svg
                  className="h-6 w-6 text-primary group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/*Slider wrapper*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8">
            <div className="swiper-slide group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-primary slide-active:border-primary">
              <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-primary swiper-slide-active:text-primary">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
                Pagedone is simply the best tool of investment in the market
                right now.
              </p>
              <div className="flex items-center gap-5">
                <img
                  className="rounded-full object-cover"
                  src="https://pagedone.io/asset/uploads/1696229969.png"
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <h5 className="text-gray-900 font-medium transition-all duration-500  group-hover:text-primary swiper-slide-active:text-primary">
                    Jane D
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">CEO </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-primary slide-active:border-primary">
              <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-primary swiper-slide-active:text-primary">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9  group-hover:text-gray-800">
                I was hesitant to try pagedone at first, but I'm so glad I did -
                it's exceeded all of my expectations.
              </p>
              <div className="flex items-center gap-5">
                <img
                  className="rounded-full object-cover"
                  src="https://pagedone.io/asset/uploads/1696229994.png"
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <h5 className="text-gray-900 font-medium transition-all duration-500  group-hover:text-primary swiper-slide-active:text-primary">
                    Harsh P.
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-primary ">
              <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-primary swiper-slide-active:text-primary">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800 ">
                Pagedone stands out as the most user-friendly and effective
                solution I've ever used.
              </p>
              <div className="flex items-center gap-5">
                <img
                  className="rounded-full object-cover"
                  src="https://pagedone.io/asset/uploads/1696230027.png"
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-primary swiper-slide-active:text-primary">
                    Alex K.
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">
                    Design Lead
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
