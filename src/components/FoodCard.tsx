"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import { FoodItem } from "@/types/food";

interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  image?: {
    asset?: {
      url?: string;
    };
  };
}

const FoodCard: React.FC<FoodCardProps> = ({ id, name, price, image }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
        image,
        quantity: 1,
      })
    );
    router.push("/cart");
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg text-center">
      <Image
        src={image?.asset?.url || "/images/placeholder.jpg"}
        alt={name}
        width={128}
        height={128}
        className="mx-auto w-32 h-32 object-cover"
      />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-lg font-bold text-gray-700">${price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;