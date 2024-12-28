import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { menuItems } from "@/constant/menu"; // Assuming this exists
import StarterMenu from "@/components/StarterMenu";
import MainCourse from "@/components/MainCourse"; // Ensure MainCourse is imported correctly
import StatsSection from "@/components/StatsSection";
import Dessert from "@/components/Dessert";
import Drinks from "@/components/Drinks";
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";

// Local menuItems array for MainCourse component
const mainCourseItems = [
  {
    name: "Optic Big Breakfast Combo Menu",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    name: "Cashew Chicken With Stir-Fry",
    description: "Gorgonzola, ricotta, mozzarella, taleggio",
    calories: 700,
    price: 43,
  },
  {
    name: "Vegetables & Green Salad",
    description: "Ground cumin, avocados, peeled and cubed",
    calories: 1000,
    price: 14,
  },
  {
    name: "Spicy Vegan Potato Curry",
    description: "Spreadable cream cheese, crumbled blue cheese",
    calories: 560,
    price: 35,
  },
];

function Page() {
  return (
    <div>
      {/* Navbar Component */}
      <NavBar />
      <div>
        <HeroBanner title="Our Menu" />
      </div>

      {/* Starter Menu with imported menuItems */}
      <StarterMenu menuItems={menuItems} />

      {/* Main Course Section */}
      <MainCourse
        menuItems={mainCourseItems}
        imageSrc="/images/image-107.png" // Replace with the correct image path
        title="Main Course"
      />
      <StatsSection />
      <Dessert />
      <Drinks />
      <div>
        <Partners />
      </div>
      
      {/* Example Image Usage */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/images/sample-banner.jpeg" // Replace with a valid image path
          alt="Sample Banner"
          width={500}
          height={300}
          className="rounded-md shadow-md"
        />
      </div>
    </div>
  );
}

export default Page;
