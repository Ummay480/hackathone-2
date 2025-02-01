import React from "react";

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  onClick: () => void;
  onAddToCart: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, description, price, image, onClick, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
      <div className="flex justify-between mt-3">
        <button className="bg-blue-500 text-white px-3 py-2 rounded-md" onClick={onClick}>
          View Details
        </button>
        <button className="bg-orange-400 text-white px-3 py-2 rounded-md" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
