"use client"
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function CreativeProcess() {
  return (
    <section className="relative h-screen bg-black text-white pt-10">
      <div className="absolute inset-0">
        <Image
          src="/images/image-99.png" // Ensure this path matches your file structure
          alt="Delicious Food Background"
          width={1200} // Set a fixed width for the image
          height={800} // Set a fixed height for the image
          objectFit="cover" // Ensure the image covers the space without distorting
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-end justify-center h-full text-end space-y-2 pr-8 ">
        <h2 className="text-xl font-greatVibes text-center -mt-60 -ml-96 mr-44 text-orange-400">Restaurant Active Process</h2>
        <h1 className="text-4xl font-semibold md:text-3xl -ml-40 mr-44">
          <span className="text-orange-500">We</span> Document Every Food <br />
          Bean Process until it is saved
        </h1>
        <p className="-ml-40 mr-44 mx-auto text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.<br/> Quisque diam pellentesque bibendum non dui volutpat <br/>fringilla bibendum. 
          Urna elit augue urna.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 -ml-40 mr-14 text-xs text-white rounded-full border-orange-400 border-2 md:text-base hover:bg-gray-200">
            Read More
          </button>
          <button className="flex px-6 py-2 text-xs -ml-20 mr-40 font-semibold text-white md:text-base hover:text-orange-400">
          <FaPlay className="bg-orange-400 rounded-full text-white p-3 -ml-20 text-4xl z-20" />
            Play Video
            </button>              
        </div>
      </div>
    </section>
  );
}
