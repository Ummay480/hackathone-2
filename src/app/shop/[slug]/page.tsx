// src/app/shop/[slug]/page.tsx
import React from "react";
import { notFound } from 'next/navigation';
import NavBar from "@/components/NavBar";
import {FoodItem} from "@/types/food";
import StatsSection from "@/components/StatsSection";
import Dessert from "@/components/Dessert";
import Drinks from "@/components/Drinks";
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";


async function fetchMenuData(slug: string) {
  try {
    const response = await fetch('/api/foods');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const allFoods: FoodItem[] = await response.json(); // Type the response!

    const currentMenu = findMenuBySlug(allFoods, slug);
    return currentMenu;

  } catch (error) {
    console.error("Error fetching menu data:", error);
    return null;
  }
}

function findMenuBySlug(allFoods: FoodItem[], slug: string) { // Correct type here!
  for (const category of allFoods) {
    if (category.category === slug) {
      return {
        title: category.category.charAt(0).toUpperCase() + category.category.slice(1).replace('-', ' '),
        imageSrc: `/images/${category.category}.jpg`,
        items: category,
      };
    }
  }
  return null;
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