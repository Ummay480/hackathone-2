import React from "react";
import Image from "next/image";

// ✅ Correct Interface for Cart Item Component
export interface CartItemProps {
  id: string;
  name: string;
  image?: { asset?: { url?: string } };
  price: number;
  quantity: number;
  stock: number;
  onRemove: () => void;
  onAdd: () => void;
}

// ✅ Correct cartItem object (Removed `item: FoodItem`)
const CartItemProps = {
  id: "123",
  name: "Pizza",
  image: { asset: { url: "https://example.com/pizza.jpg" } },
  stock: 5,
  price: 10,
  quantity: 2,
  onAdd: () => console.log("Added"),
  onRemove: () => console.log("Removed"),
};

// ✅ Use `CartItemProps` correctly in the component
const CartItem: React.FC<CartItemProps> = ({ 
  id, 
  name, 
  image, 
  price, 
  quantity, 
  onAdd, 
  onRemove 
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg text-center" data-id={id}>
      <Image 
        src={image?.asset?.url ?? "/images/product.jpg"} 
        alt={name} 
        width={128} 
        height={128} 
        className="mx-auto w-32 h-32 object-cover" 
      />

      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-sm text-gray-500">ID: {id}</p> {/* ✅ Display ID for debugging */}
      <p className="text-lg font-bold text-gray-700">${price.toFixed(2)}</p>
      <p className="text-gray-600">Quantity: {quantity}</p>
      
      <div className="flex justify-center mt-4 space-x-2">
        <button 
          className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-green-700"
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

// ✅ Correct Export
export default CartItem;
