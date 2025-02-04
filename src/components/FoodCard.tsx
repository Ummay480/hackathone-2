import Image from 'next/image';
import React from 'react';

interface FoodCardProps {
  imageUrl: string;
  name: string;
  title: string; // Or description, be consistent
  price: string;
  discountPrice?: string;
  discount?: string;
  rating: number; // Number type for rating
  reviewCount: number; // Number type for review count (reviews is a keyword)
}

const FoodCard: React.FC<FoodCardProps> = ({ imageUrl, title, price, discountPrice }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={imageUrl} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex items-center mt-2">
          {discountPrice ? (
            <>
              <span className="text-gray-400 line-through mr-2">${price}</span>
              <span className="text-orange-500 font-bold">${discountPrice}</span>
            </>
          ) : (
            <span className="text-gray-800 font-bold">${price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;