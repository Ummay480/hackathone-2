import Image from 'next/image';
import React from 'react';

interface ChefCardProps {
  imageUrl: string;
  name: string;
  position: string;
  experience: string;
  specialty: string;
  description: string;
  available: boolean;
}

const ChefCard: React.FC<ChefCardProps> = ({ imageUrl, name, position, experience, specialty, description, available }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={imageUrl} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500">{position || "Position not specified"}</p>
        <p className="text-gray-500">{experience}</p>
        <p className="text-gray-500">{specialty}</p>
        <p className="text-gray-500">{description}</p>
        <p className={`text-sm ${available ? "text-green-500" : "text-red-500"}`}>{available ? "Available" : "Not Available"}</p>
      </div>
    </div>
  );
};

export default ChefCard;
