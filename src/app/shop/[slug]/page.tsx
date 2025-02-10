// app/shop/[slug]/page.tsx
import React from "react";
import { notFound } from 'next/navigation';
import NavBar from "@/components/NavBar";
import MainCourse from "@/components/MainCourse";
import StatsSection from "@/components/StatsSection";
import Dessert from "@/components/Dessert";
import Drinks from "@/components/Drinks";
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";

// Placeholder for menu data.  In a real app, you'd fetch this.
// You'll likely want to fetch this data based on the slug.
const menuData = {
  "main-course": {
    title: "Main Course",
    imageSrc: "/images/image-107.png",
    items: [
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
    ],
  },
  "desserts": {
    title: "Desserts",
    imageSrc: "/images/dessert.jpg", // Replace with actual image path
    items: [
      // ... your dessert items
      {
        name: "Chocolate Cake",
        description: "Delicious chocolate cake",
        calories: 400,
        price: 10,
      }
    ],
  },
    "drinks": {
    title: "Drinks",
    imageSrc: "/images/drinks.jpg", // Replace with actual image path
    items: [
      // ... your dessert items
      {
        name: "Coke",
        description: "Cold and refreshing",
        calories: 150,
        price: 2,
      }
    ],
  },
  // ... more menu categories
};


async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch menu data based on the slug.  This is the KEY change.
  const currentMenu = menuData[slug];

  if (!currentMenu) {
      notFound(); // Handle the case where the slug doesn't match a menu
  }

  return (
    <main className="overflow-x-hidden">
      <NavBar />

      <div>
        <HeroBanner title={currentMenu.title} /> {/* Dynamic title */}
      </div>

      <MainCourse
        menuItems={currentMenu.items} // Dynamic menu items
        imageSrc={currentMenu.imageSrc} // Dynamic image
        title={currentMenu.title}      // Dynamic title
      />

      <StatsSection />
      <Dessert />  {/* You might want to pass data to these components too */}
      <Drinks />

      <div>
        <Partners />
      </div>
    </main>
  );
}

export default Page;