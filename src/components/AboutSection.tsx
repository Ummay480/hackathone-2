"use client";

import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="flex py-10 px-10 w-full max-w-[1380px] flex-col md:flex-row gap-4 md:gap-6 bg-black text-white">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <h3 className="text-3xl font-semibold text-orange-400">We</h3>
        <h3 className="flex text-3xl font-semibold text-white ml-14 -mt-9">Create the Best Food Products</h3>
        <p className="mt-4 text-slate-400 max-w-3xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, repellat corrupti molestias ullam ipsum magni accusamus, voluptate laudantium inventore cumque incidunt, labore est alias ea reiciendis sint odio reprehenderit eligendi.
        </p>
        <ul className="mt-2 text-slate-400">
  <li className=" mt-3 flex items-center gap-2">
    <FaCheck className="text-slate-400" />
    Lacus nisi, et ac dapibus sit eu velit in consequat.
  </li>
  <li className=" mt-3 flex items-center gap-2">
    <FaCheck className="text-slate-400" />
    Quisque diam pellentesque bibendum non dui volutpat fringilla 
  </li>
  <li className=" mt-3 flex items-center gap-2">
    <FaCheck className="text-slate-400" />
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  </li>
</ul>
        <button className="mt-6 ml-2 bg-orange-400 py-3 px-4 w-1/4 rounded-full text-sm hover:bg-orange-500 transition">
          Read More
        </button>
      </div>

      {/* Right Side */}
      <div className="flex flex-col flex-1 items-center gap-4">
        {/* Main Image */}
        <div className="relative w-72 h-40">
          <Image
            src="/images/image-41.jpeg"
            alt="Dish"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-md"
          />
        </div>
        {/* Additional Images */}
        <div className="flex gap-4">
          <div className="relative w-36 h-32">
            <Image
              src="/images/image-44.jpeg"
              alt="Dish"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="relative w-36 h-32">
            <Image
              src="/images/image-42.jpeg"
              alt="Dish"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
