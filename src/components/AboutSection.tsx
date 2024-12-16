"use client"
import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
      <section className="py-16 bg-white text-center">
        <h3 className="text-3xl font-semibold text-gray-800">We Create the Best Food Products</h3>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Experience delicious meals prepared with love by our expert chefs. We focus on quality, hygiene, and taste.
        </p>
        <div className="relative w-60 h-60"> {/* Parent container with fixed size */}
    <Image
      src="/images/about1.jpeg"
      alt="Dish"
      layout="fill" // Makes the image fill the container
      objectFit="cover" // Ensures the image covers the area without distortion
      className="rounded-lg shadow-md"
    />
  </div>
  <div className="relative w-60 h-60"> {/* Parent container with fixed size */}
    <Image
      src="/images/about3.png"
      alt="Dish"
      layout="fill" // Makes the image fill the container
      objectFit="cover" // Ensures the image covers the area without distortion
      className="rounded-lg shadow-md"
    />
  </div>
      </section>
    );
  };
  
  export default AboutSection;
  