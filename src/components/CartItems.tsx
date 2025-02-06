import React from "react";

interface CartItemProps {

  name: string;
  image: string; // Added image property
  stock: number; // Added stock property
  price: number;
  quantity: number;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({  name, image, stock, price, quantity, onRemove }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg text-center">
      <img src={image || "/images/product.jpg"} alt={name} className="mx-auto w-32 h-32 object-cover" />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-lg font-bold text-gray-700">${price}</p>
      <p className="text-gray-600">Quantity: {quantity}</p>
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

export default CartItem;
