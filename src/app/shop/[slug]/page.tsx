"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import NavBar from "@/components/NavBar";

// Define the Food interface
interface Food {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Fetch food data on the server side
async function getFood(slug: string): Promise<Food | null> {
  try {
    const res = await fetch(
      `https://sanity-nextjs-rouge.vercel.app/api/foods?slug=${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch food data:", res.statusText);
      return null;
    }

    const data: Food[] = await res.json();
    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Error fetching food:", error);
    return null;
  }
}

export default async function FoodDetailsPage({ params }: { params: { slug: string } }) {
  const food = await getFood(params.slug);

  if (!food) {
    return notFound();
  }

  // Add to Cart functionality
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(food);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  };

  // Stripe Checkout
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: [food] }),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <main className="container mx-auto px-4 mt-10">
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
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

        {/* Food Details Section */}
        <div>
          <h1 className="text-3xl font-bold">{food.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mt-4">${food.price}</p>
          <p className="text-md text-gray-600 mt-6">{food.description}</p>
          <p className={`text-md font-semibold mt-4 ${food.available ? "text-green-600" : "text-red-600"}`}>
            {food.available ? "Available" : "Out of Stock"}
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 mt-4 ml-4 rounded-md hover:bg-green-700"
            onClick={handleCheckout}
          >
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}
