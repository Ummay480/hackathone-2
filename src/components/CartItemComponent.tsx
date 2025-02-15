import React from "react";
import Image from "next/image";
import { CartItemProps } from "@/types/cart"; // Import the correct type

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  category,
  description,
  image,
  price,
  quantity,
  stock,
  onAdd,
  onRemove,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg text-center" data-id={id}>
      {/* Product Image */}
      <Image
        src={image?.asset?.url ?? "/images/placeholder.jpg"} // Fallback image
        alt={name}
        width={128}
        height={128}
        className="mx-auto w-32 h-32 object-cover"
      />

      {/* Product Details */}
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="text-sm text-gray-400">Stock: {stock}</p>
      <p className="text-lg font-bold text-gray-700">${price.toFixed(2)}</p>
      <p className="text-gray-600">Quantity: {quantity}</p>

      {/* Action Buttons */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500"
          onClick={onAdd} // Use the onAdd function
        >
          Add More
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          onClick={onRemove} // Use the onRemove function
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;