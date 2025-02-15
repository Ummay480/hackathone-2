import { notFound } from "next/navigation";
import FoodCard from "@/components/FoodCard";

interface FoodItem {
  id: string;
  item:string;
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

const getFoodItems = async (): Promise<FoodItem[] | null> => {
  try {
    const res = await fetch("https://food-xtn5-lac.vercel.app/api/food", {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data: FoodItem[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching food items:", error);
    return null;
  }
};

export default async function ShopPage() {
  const foodItems = await getFoodItems();

  if (!foodItems) {
    notFound();
  }

  return (
    <div>
      <h1>Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const foodItems: Array<{ slug: { current: string } }> = await fetch(
    "https://food-xtn5-lac.vercel.app/api/food"
  ).then((res) => res.json());

  return foodItems.map((item) => ({ slug: item.slug.current }));
}