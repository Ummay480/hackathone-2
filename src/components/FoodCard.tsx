import React from "react";
import Image from "next/image";
import { FoodCardProps } from "@/types/food";

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg text-center">
      <Image
        src={item.image?.asset?.url ?? "/images/product.jpg"}
        alt={item.name}
        width={128}
        height={128}
        className="mx-auto w-32 h-32 object-cover"
      />
      <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
      <p className="text-sm text-gray-500">{item.category}</p>
      <p className="text-sm text-gray-500">{item.description}</p>
      <p className="text-lg font-bold text-gray-700">${item.price.toFixed(2)}</p>
      <p className="text-sm text-gray-400">Stock: {item.stock}</p>
    </div>
  );
};

export default FoodCard;