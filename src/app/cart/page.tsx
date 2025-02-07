import React from "react";
import { CartItemProps } from "@/types/cart"; // Ensure correct import

const CartItem: React.FC<CartItemProps> = ({ 
  
  name, 
  image, 
  price, 
  quantity, 
  onAdd, 
  onRemove 
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg text-center">
      <img 
        src={image || "/images/product.jpg"} 
        alt={name} 
        className="mx-auto w-32 h-32 object-cover" 
      />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-lg font-bold text-gray-700">${price}</p>
      <p className="text-gray-600">Quantity: {quantity}</p>
      
      <div className="flex justify-center mt-4 space-x-2">
        {onAdd && ( // ✅ Ensure onAdd is defined before using
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            onClick={onAdd}
          >
            Add More
          </button>
        )}
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

export default CartItem; // ✅ Make sure to export correctly
