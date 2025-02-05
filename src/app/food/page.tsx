import React from "react";
import Navbar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import Breakfast from "@/components/Breakfast";
import FastFood from "@/components/FastFood";
import Snacks from "@/components/Snack";
import Dessert from "@/components/Dessert";
import Dinner from "@/components/Dinner";
import Lunch from '@/components/Lunch';
import Drink from "@/components/Drinks";
import FoodCard from "@/components/FoodCard";


const FoodPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Header */}
      <div>
        <Navbar />
        <HeroBanner title="Food" />
         <div className="mt-10">
         <FoodCard/>
        <Dinner/> 
        <Breakfast/> 
        <FastFood/> 
        <Drink/> 
        <Lunch/> 
        <Snacks/> 
        <Dessert/>
           </div>
    </div>
    </div>
  );
};
export default FoodPage