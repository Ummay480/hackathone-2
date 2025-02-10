import React from "react";
import Image from "next/image";

// ✅ Cart Item Props Interface
export interface CartItemProps {
  id: string;
  category:string;
  name: string;
  description: string;
  image?: {
    string?: string;
    asset?: {
      url?: string;
    };
  };
  price: number;
  quantity: number;
  stock: number;
  onRemove: () => void;
  onAdd: () => void;
}

// ✅ Functional Component for Cart Item
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
        src={image?.asset?.url ?? "/images/product.jpg"} // ✅ Fallback Image
        alt={name}
        width={128}
        height={128}
        className="mx-auto w-32 h-32 object-cover"
      />

      {/* Product Details */}
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <h3 className="text-xl font-semibold mt-4">{category}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="text-sm text-gray-400">Stock: {stock}</p> {/* ✅ Show Stock */}
      <p className="text-lg font-bold text-gray-700">${price.toFixed(2)}</p>
      <p className="text-gray-600">Quantity: {quantity}</p>

      {/* Action Buttons */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500"
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
