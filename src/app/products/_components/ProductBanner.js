import Image from "next/image";
import React from "react";

const ProductBanner = () => {
  return (
    <div className="relative h-80">
      <Image
        src={"/assets/images/banner.png"}
        alt="banner"
        height={600}
        width={1000}
        className="absolute top-0 left-0 w-full h-80 object-cover"
      />
      <Image
        src={"/assets/images/samsung.webp"}
        alt="samsung"
        height={400}
        width={500}
        className="absolute top-0 right-20 w-auto h-full p-10"
      />
      <h1 className="z-10 relative text-center flex items-center justify-center h-full text-6xl text-white font-bold text-shadow-md text-shadow-primary">
        Samsung Galaxy S26 Ultra
      </h1>
    </div>
  );
};

export default ProductBanner;
