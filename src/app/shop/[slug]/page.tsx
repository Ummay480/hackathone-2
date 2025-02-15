import { notFound } from "next/navigation";
import Image from "next/image";

interface FoodItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
  stock: number;
  price: number;
}

const getFoodItem = async (slug: string): Promise<FoodItem | null> => {
  try {
    const res = await fetch(`https://food-ruddy-rho.vercel.app/api/food?slug=${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data: FoodItem[] = await res.json();
    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Error fetching food item:", error);
    return null;
  }
};

export default async function FoodPage({ params }: { params: { slug: string } }) {
  const foodItem = await getFoodItem(params.slug);

  if (!foodItem) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto my-20">
      <h1 className="text-3xl font-bold">{foodItem.name}</h1>
      <Image
        src={foodItem.image?.asset?.url || "/placeholder.jpg"}
        alt={foodItem.name || "Food image"}
        width={500}
        height={350}
        className="rounded-lg object-cover"
      />
      <p className="text-md text-gray-600 mt-6">{foodItem.description}</p>
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const foodItems: Array<{ slug: { current: string } }> = await fetch(
    "https://food-xtn5-lac.vercel.app/api/food"
  ).then((res) => res.json());

  return foodItems.map((item) => ({ slug: item.slug.current }));
}