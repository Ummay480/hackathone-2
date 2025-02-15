import { notFound } from "next/navigation";
import FoodCard from "@/components/FoodCard";
import NavBar from "@/components/NavBar";
import { createClient } from "@sanity/client";

import HeroBanner from "@/components/HeroBanner";

// Initialize Sanity client
const client = createClient({
  projectId: "yfaabr9s",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-02",
});

// Define the food type for TypeScript
type Food = {
  id: string; // Changed from _id to id
  name: string;
  price: number;
  rating: number;
  tags: string[];
  imageUrl: string;
};

const getFoods = async (): Promise<Food[] | null> => {
  try {
    const query = `*[_type == "food"]{
      _id,
      name,
      "price": price + 0, // Ensures price is a number
      rating,
      tags,
      "imageUrl": image.asset->url
    }`;
    

    const data = await client.fetch(query);

    // Map _id to id
    return data.map((food: any) => ({
      id: food._id, // Convert _id to id
      name: food.name,
      price: food.price,
      rating: food.rating,
      tags: food.tags,
      imageUrl: food.imageUrl,
    }));
  } catch (error) {
    console.error("Failed to fetch foods:", error);
    return null;
  }
};

export default async function ShopPage() {
  const foods = await getFoods();

  if (!foods) {
    notFound();
  }

  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Header */}
      <div>
        <NavBar />
      <HeroBanner title="Shop"/>
      <h1 className="text-3xl font-bold mb-6">Foods</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <FoodCard key={food.id} item={food} />
        ))}
      </div>
    </div>
    </div>
  );
}
