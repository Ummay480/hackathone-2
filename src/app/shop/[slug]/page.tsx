"use client"; // Ensure this is a Client Component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";

// Import necessary Stripe hooks
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface Food {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
}

export default function FoodDetailsPage({ params }: { params: { slug: string } }) {
  const [food, setFood] = useState<Food | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch food data
  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`/api/foods?slug=${params.slug}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch food");

        const data: Food[] = await res.json();
        setFood(data.length ? data[0] : null);
      } catch (error) {
        console.error("Error fetching food:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFood();
  }, [params.slug]);

  // Handle "Add to Cart"
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(food);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  // Handle Stripe Checkout
  const handleCheckout = async () => {
    if (!food) return;
    const stripe = await stripePromise;
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [food] }),
    });

    const { id } = await res.json();
    stripe?.redirectToCheckout({ sessionId: id });
  };

  if (loading) return <p>Loading...</p>;
  if (!food) return notFound();

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div>
          {food.image && (
            <Image src={food.image} alt={food.name} width={500} height={350} className="w-full h-[350px] object-cover rounded-md" />
          )}
        </div>

        {/* Food Details Section */}
        <div>
          <h1 className="text-3xl font-bold">{food.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">${food.price}</p>
          <p className="text-md text-gray-600 mt-6">{food.description}</p>
          <p className={`text-md font-semibold mt-4 ${food.available ? "text-green-600" : "text-red-600"}`}>
            {food.available ? "Available" : "Out of Stock"}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md" onClick={handleAddToCart}>Add to Cart</button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-md" onClick={handleCheckout}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
