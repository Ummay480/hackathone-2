import React from "react";
import Image from "next/image"; // Ensure Next.js Image component is imported

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string | {
    string?: string;
    asset?: { url?: string };
  };
  onClick: () => void;
  onAddToCart: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, description, price, image, onClick, onAddToCart }) => {
  // Extract URL from the image prop
  const imageUrl = typeof image === "string" ? image : image?.asset?.url || "/placeholder.jpg"; 

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image 
        src={imageUrl} 
        alt={name} 
        width={300} 
        height={160} 
        className="w-full h-40 object-cover rounded-md"
      />
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
