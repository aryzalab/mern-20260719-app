"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageViewer = ({ imageUrls }) => {
  const [selected, setSelected] = useState(imageUrls[0]);

  return (
    <div className="w-full h-full max-lg:mx-auto mx-0">
      <div className="block">
        <Image
          src={selected ?? "/assets/images/placeholder.png"}
          alt="image"
          className="max-lg:mx-auto rounded-2xl object-contain h-96"
          height={1500}
          width={1500}
        />
      </div>
      <div className="flex gap-4 items-center justify-center py-4">
        {imageUrls.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt="image"
            className="cursor-pointer rounded-xl transition-all duration-500 border border-gray-300 hover:border-primary object-cover h-20 w-20"
            height={500}
            width={500}
            url
            onClick={() => setSelected(url)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
