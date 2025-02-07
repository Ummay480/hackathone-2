"use server";

import { notFound } from "next/navigation";
import Image from "next/image";

interface Food {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
}

// ✅ Define the getFood function
async function getFood(slug: string): Promise<Food | null> {
  try {
    const res = await fetch(`https://sanity-nextjs-rouge.vercel.app/api/foods?slug=${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data: Food[] = await res.json();
    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Error fetching food:", error);
    return null;
  }
}

// ✅ Define Props Interface
interface FoodDetailsPageProps {
  params: {
    slug: string;
  };
}

export default async function FoodDetailsPage({ params }: FoodDetailsPageProps) {
  if (!params?.slug) {
    return notFound();
  }

  const food = await getFood(params.slug);

  if (!food) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {food.image && (
            <Image
              src={food.image}
              alt={food.name}
              width={500}
              height={350}
              className="w-full h-[350px] object-cover rounded-md"
            />
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{food.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">${food.price}</p>
          <p className="text-md text-gray-600 mt-6">{food.description}</p>
          <p className="text-md font-semibold mt-4">
            {food.available ? "Available" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
}

// ✅ Correct the format of generateStaticParams
export async function generateStaticParams() {
  return [{ slug: "placeholder" }]; // Correct format
}

export const dynamicParams = true; // Enable dynamic params
