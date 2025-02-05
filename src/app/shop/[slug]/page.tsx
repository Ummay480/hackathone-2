"use server";
import React from "react";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "yfaabr9s",
  dataset: "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2025-02-02",
});

interface Food {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  available: boolean;
}

export default async function FoodDetailsPage({ params }: { params: { slug: string } }) {
  const query = `*[_type == "food" && _id == $slug][0] {
    _id, name, price, "imageUrl": image.asset->url, description, available
  }`;
  
  const food: Food | null = await client.fetch(query, { slug: params.slug });

  if (!food) return <div className="text-center text-gray-600 mt-10">Food item not found</div>;

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={food.imageUrl} alt={food.name} className="w-full h-[350px] object-cover rounded-md" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{food.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">${food.price}</p>
          <p className="text-md text-gray-600 mt-6">{food.description}</p>
          <p className="text-md font-semibold mt-4">{food.available ? "Available" : "Out of Stock"}</p>
        </div>
      </div>
    </div>
  );
}
