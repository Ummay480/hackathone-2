"use client";
import React from "react";
import Image from "next/image";
import { Coffee } from "lucide-react";
import Heading from "@/components/Heading";

interface MenuItem {
  name: string;
  description: string;
  calories: number;
  price: number;
  highlight?: boolean;
}

interface StarterMenuProps {
  menuItems: MenuItem[];
}

const StarterMenu: React.FC<StarterMenuProps> = ({ menuItems = [] }) => {
  return (
    <section className="w-full mx-auto px-6 sm:px-8 lg:px-12 bg-white">
      <div className="container mx-auto py-12 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Section: Image */}
        <div className="w-full lg:w-[40%]">
          <Image
            src="/images/image-106.png"
            alt="Starter dish"
            width={500}
            height={600}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Section: Menu Content */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
           <div className="-mt-24 lm-20"> 
            <Coffee className="text-[#FF9F0D]" size={20} />
            </div>
            <div className="-ml-7 pt-4">
            <Heading text="Starter Menu" />
          </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-8">
            {menuItems.length > 0 ? (
              menuItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-dashed border-gray-300 pb-6 last:border-b-0"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className={`text-lg sm:text-xl font-semibold ${
                        item.highlight ? "text-[#FF9F0D]" : "text-gray-900"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    {item.description}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {item.calories} CAL
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No menu items available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarterMenu;
