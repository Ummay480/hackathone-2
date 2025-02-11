// src/app/shop/[slug]/page.tsx
import React from "react";
import { notFound } from 'next/navigation';
import NavBar from "@/components/NavBar";
import MainCourse from "@/components/MainCourse";
import StatsSection from "@/components/StatsSection";
import Dessert from "@/components/Dessert";
import Drinks from "@/components/Drinks";
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";

async function fetchMenuData(slug: string) {
  try {
    const response = await fetch('/api/foods'); // Fetch ALL food data
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const allFoods = await response.json();

    // Find the menu items based on the slug
    const currentMenu = findMenuBySlug(allFoods, slug);

    return currentMenu;

  } catch (error) {
    console.error("Error fetching menu data:", error);
    return null;
  }
}



function findMenuBySlug(allFoods: any, slug: string) {
  // Example structure of your food.json (adjust as needed)
  // const allFoods = [
  //   {
  //     "category": "main-course",
  //     "items": [ /* main course items */ ]
  //   },
  //   {
  //     "category": "desserts",
  //     "items": [ /* dessert items */ ]
  //   },
  //   // ... more categories
  // ];

  for (const category of allFoods) {
    if (category.category === slug) {
      return {
        title: category.category.charAt(0).toUpperCase() + category.category.slice(1).replace('-', ' '), // Nicer title
        imageSrc: `/images/${category.category}.jpg`, // Or dynamic image path
        items: category.items,
      };
    }
  }

  return null; // Return null if slug not found
}



async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const currentMenu = await fetchMenuData(slug);

  if (!currentMenu) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <div>
        <HeroBanner title={currentMenu.title} />
      </div>

      <MainCourse  // Or appropriate component for the category
        menuItems={currentMenu.items}
        imageSrc={currentMenu.imageSrc}
        title={currentMenu.title}
      />

      <StatsSection />
      <Dessert />
      <Drinks />

      <div>
        <Partners />
      </div>
    </main>
  );
}

export default Page;