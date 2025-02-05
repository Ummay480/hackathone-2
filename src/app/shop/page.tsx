"use server";
import React from "react";
import { createClient } from "@sanity/client";
import Link from "next/link";

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
}

export default async function ShopPage() {
  const query = `*[_type == "food"]{ _id, name, price, "imageUrl": image.asset->url }`;
  const foods: Food[] = await client.fetch(query);

  return (
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {foods.map((food) => (
          <Link key={food._id} href={`/shop/${food._id}`} className="border p-4 rounded-lg shadow-md bg-white">
            <img src={food.imageUrl} alt={food.name} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-4">{food.name}</h2>
            <p className="text-gray-700 text-md mt-2">${food.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
