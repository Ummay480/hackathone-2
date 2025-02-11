// src/app/shop/[slug]/page.tsx
import React from "react";
import { notFound } from 'next/navigation';
import NavBar from "@/components/NavBar";
import { FoodItem } from "@/types/food";
import StatsSection from "@/components/StatsSection";
import Dessert from "@/components/Dessert";
import Drinks from "@/components/Drinks";
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";

async function fetchMenuData(slug: string): Promise<FoodItem | null> {
  try {
    const response = await fetch('/api/foods');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const allFoods: FoodItem[] = await response.json();
    return findMenuBySlug(allFoods, slug);
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return null;
  }
}

function findMenuBySlug(allFoods: FoodItem[], slug: string) {
  return allFoods.find(category => category.category === slug) || null;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const currentMenu = await fetchMenuData(slug);

  if (!currentMenu) {
    return notFound();
  }

  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <HeroBanner title="shop" />
      <StatsSection />
      <Dessert />
      <Drinks />
      <Partners />
    </main>
  );
}

// Static Generation (SSG)
export async function generateStaticParams() {
  return [
    { slug: "example-slug-1" },
    { slug: "example-slug-2" },
  ];
}
