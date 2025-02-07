import React from "react";
import Image from "next/image";

interface CartItemsProps {
  id: string;
  name: string;
  image: string;
  stock: number;
  price: number;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemsProps> = ({ id, name, image, stock, price, quantity, onAdd, onRemove }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg text-center">
      <Image 
        src={image || "/images/product.jpg"} 
        alt={name} 
        width={128} 
        height={128} 
        className="mx-auto w-32 h-32 object-cover" 
      />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-lg font-bold text-gray-700">${price}</p>
      <p className="text-gray-600">Quantity: {quantity}</p>
      
      <div className="flex justify-center mt-4 space-x-2">
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          onClick={onAdd}
        >
          Add More
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

// ✅ Fix: Export the component
export default CartItem;
