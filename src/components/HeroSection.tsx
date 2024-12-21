"use client"
import React from 'react';
import Image from 'next/image';


const Hero: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-black text-white px-8 py-16">
      <div className="lg:w-1/2 space-y-6">
        <p className="text-yellow-500 italic">It’s Quick & Amusing!</p>
        <h1 className="text-4xl font-bold">
          The Art of speed <br />
          <span className="text-yellow-500">food Quality</span>
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        <button className="px-6 py-2 bg-yellow-500 text-black rounded">
          See Menu
        </button>
      </div>
      <div className="lg:w-1/2 relative flex justify-center items-center">
        <div className="absolute rounded-full border border-gray-700 w-60 h-60 flex items-center justify-center">
          <Image 
          src="/images/food.png" 
          alt="Food" 
          width={80}
          height={80}
          className="rounded-lg"
           />
        </div>
        {/* Decorative food items */}
        <div className="absolute top-0 left-20">
          <Image src="/small-item.png" alt="Decorative food" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
