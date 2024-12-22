"use client";

import React from "react";
import Image from "next/image";

const ProductDetails = () => (
  <section className="flex flex-wrap lg:flex-nowrap gap-8 p-8">
    {/* Left: Images */}
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Thumbnail Images */}
      <div className="flex flex-col gap-4 items-center lg:w-1/5">
        {["image-28.png", "image-29.png", "image-30.png", "image-31.png"].map(
          (image, index) => (
            <Image
              key={index}
              src={`/images/${image}`}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover rounded-lg border border-gray-200"
              width={64}
              height={64}
            />
          )
        )}
      </div>

      {/* Main Image */}
      <div className="flex justify-center">
        <Image
          src="/images/image-33.png"
          alt="food"
          className="w-full h-auto rounded-lg"
          width={500} // Adjusted width
          height={500} // Adjusted height
          priority
        />
      </div>
    </div>

    {/* Right: Text and Buttons */}
    <div className="flex flex-col w-full lg:w-1/2 space-y-4">
      <h3 className="text-2xl font-bold">Yummy Chicken Chup</h3>
      <p className="text-yellow-500 text-xl font-semibold">$54.00</p>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        vehicula tincidunt velit, ut facilisis justo gravida at.
      </p>
      <div className="flex gap-4 mt-6">
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600">
          Add to Cart
        </button>
        <button className="bg-gray-200 text-black py-2 px-6 rounded-lg shadow-md hover:bg-gray-300">
          Wishlist
        </button>
      </div>
    </div>
  </section>
);

export default ProductDetails;
