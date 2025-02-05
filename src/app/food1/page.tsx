import React from "react";
import Navbar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import Food from "@/components/Food"; // Fixed import

const FoodPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Header */}
      <div>
        <Navbar />
        <HeroBanner title="Food" />
        <div className="mt-10">
        <Food /> {/* Fixed component tag */}
      </div>
    </div>
    </div>
  );
};

export default FoodPage;
