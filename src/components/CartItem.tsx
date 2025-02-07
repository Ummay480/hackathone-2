import React from "react";

import Image from "next/image";

interface CartItemProps {

  name: string;
  image: string; // Added image property
  stock: number; // Added stock property
  price: number;
  quantity: number;
  onRemove: () => void;
  id:string;
}

const CartItem: React.FC<CartItemProps> = ({ name, image, stock, price, quantity, onAdd, onRemove }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg text-center">
      <Image src={image || "/images/product.jpg"} alt={name} className="mx-auto w-32 h-32 object-cover" />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-lg font-bold text-gray-700">${price}</p>
      <p className="text-gray-600">Quantity: {quantity}</p>
      {onAdd && (
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          onClick={onAdd}
        >
          Add More
        </button>
      )}
      {stock > 0 ? (
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          onClick={onRemove}
        >
          Remove
        </button>
      ) : (
        <p className="mt-2 text-red-600 font-bold">Out of Stock</p>
      )}
    </div>
  );
};
