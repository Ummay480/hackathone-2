import { notFound } from "next/navigation";
import { createClient } from "@sanity/client";

// Initialize Sanity client
const client = createClient({
  projectId: "yfaabr9s",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-02",
});

// Define the food type for TypeScript
type Food = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  tags: string[];
  imageUrl: string;
  description?: string; // Add more fields as needed
};

const getFoodBySlug = async (slug: string): Promise<Food | null> => {
  try {
    const query = `*[_type == "food" && slug.current == $slug][0]{
      _id,
      name,
      price,
      rating,
      tags,
      description,
      "imageUrl": image.asset->url
    }`;

    const data = await client.fetch(query, { slug });
    return data;
  } catch (error) {
    console.error("Failed to fetch food:", error);
    return null;
  }
};

export default async function FoodPage({ params }: { params: { slug: string } }) {
  const food = await getFoodBySlug(params.slug);

  if (!food) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{food.name}</h1>
      <img
        src={food.imageUrl}
        alt={food.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-gray-600 mt-4">{food.description}</p>
      <p className="text-lg font-bold mt-2">${food.price}</p>
      <p className="text-sm text-gray-500">Rating: {food.rating}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const query = `*[_type == "food"]{
    "slug": slug.current
  }`;

  const foods: { slug: string }[] = await client.fetch(query);

  return foods.map((food) => ({
    slug: food.slug,
  }));
}