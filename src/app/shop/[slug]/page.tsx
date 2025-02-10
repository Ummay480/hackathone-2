import Image from "next/image";
import { notFound } from "next/navigation";

// Define Food Interface
interface Food {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
}

// Mock function to fetch food details (Replace with API call)
async function getFood(slug: string): Promise<Food | null> {
  const foods: Food[] = [
    { id: "1", slug: "burger", name: "Cheese Burger", price: 5.99, image: "/burger.jpg", description: "A delicious cheese burger", available: true },
    { id: "2", slug: "pizza", name: "Pepperoni Pizza", price: 10.99, image: "/pizza.jpg", description: "A tasty pepperoni pizza", available: false }
  ];

  return foods.find((food) => food.slug === slug) || null;
}

// Server Component (No "use client")
export default async function FoodDetailsPage({ params }: { params: { slug: string } }) {
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

// ✅ Allow Static Generation
export async function generateStaticParams() {
  return [
    { slug: "burger" },
    { slug: "pizza" },
  ];
}
