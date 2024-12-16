
import React from "react";
import Image from "next/image";
const HeroSection = () => {
    return (
      <section className="relative bg-black text-white h-screen">
  <div className="absolute inset-0">
    <Image
      src="/images/heropic.png"
      alt="Food"
      layout="fill" // Ensures the image takes up full space in its parent
      objectFit="cover" // Ensures the image covers the area without distortion
      className="opacity-50"
    />
  </div>
        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h2 className="text-5xl font-bold">The Art of Speed Food Quality</h2>
          <p className="mt-4 text-lg max-w-2xl">
            Enjoy the taste of our dishes prepared with fresh and organic ingredients.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded text-white">
            Explore Menu
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  