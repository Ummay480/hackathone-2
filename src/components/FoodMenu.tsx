import React from "react";
import Image from "next/image";

const FoodMenu: React.FC = () => {
  const menuItems = [
    { name: "Grilled Chicken", price: "$12.99", image: "/images/food2.png" },
    { name: "Pasta Delight", price: "$10.99", image: "/images/food3.png" },
    { name: "Cheese Burger", price: "$9.99", image: "/images/burger.png" },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h3 className="text-3xl font-semibold text-gray-800">From Our Menu</h3>
      <div className="mt-8 flex justify-center space-x-6">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <Image
              src={item.image}
              alt={item.name}
              width={160} // Replace with desired width
              height={160} // Replace with desired height
              className="w-40 h-40 mx-auto"
            />
            <h4 className="mt-4 text-lg font-bold">{item.name}</h4>
            <p className="text-orange-500">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodMenu;
