"use client";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative py-24 h-screen bg-[url('/assets/images/fashion.jpg')] w-auto bg-center bg-cover bg-no-repeat"
    >
      {/* Overlay */}
      <div className="h-screen w-full bg-black/50 absolute top-0 left-0" />
      <div className="container mx-auto px-4 relative z-5">
        <h1 className="text-center text-white text-6xl lg:text-9xl font-medium mt-24">
          {t("hero.title")}
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
  );
};

export default Hero;
