"use client"
import React from "react";
import Link from "next/link";

const FoodMenu2: React.FC = () => {
  return (
    <section className="text-black bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Our Food Menu</h1>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Varius sed pharetra dictum neque massa congue.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-6 text-gray-400 text-sm md:text-base">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map(
    (tab, index) => {
      // Define the type of the customPaths object with exact keys
      const customPaths: Record<"Lunch" | "Dinner" | "Snack", string> = {
        Lunch: "/menu/lunch",
        Dinner: "/menu/dinner",
        Snack: "/menu/snack", // You can add more if needed
      };

      // Type check for the tab to ensure it's one of the keys in customPaths
      const href = customPaths[tab as "Lunch" | "Dinner" | "Snack"] || `/${tab.toLowerCase()}`;

      return (
        <Link key={index} href={href} passHref>
          <button
            className={`${
              index === 0 ? "text-[#FF9F0D] border-b-2 border-[#FF9F0D]" : ""
            } pb-2 hover:text-[#FF9F0D] transition`}
          >
            {tab}
          </button>
        </Link>
      );
    }
  )}
</div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-600">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-b border-gray-600 py-4"
              >
                {/* Left Item */}
                <div>
                  <h3 className="text-lg font-semibold text-[#FF9F0D]">
                    Alder Grilled Chinook Salmon
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-gray-500 text-sm mt-1">560 CAL</p>
                </div>
                {/* Price */}
                <p className="text-xl font-bold text-[#FF9F0D]">$32</p>
              </div>
            ))}
        </div>

        {/* View Menu Button */}
        <div className="text-center mt-8">
          <button className="bg-transparent border border-[#FF9F0D] text-[#FF9F0D] px-6 py-2 rounded-lg hover:bg-[#FF9F0D] hover:text-black transition">
            View menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu2;
