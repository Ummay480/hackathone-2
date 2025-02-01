"use client";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart } from "@/redux/cartSlice"; // Import addToCart action
import MenuCard from "@/components/MenuCard"; // Reusable component for menu items

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const CategoryPage: FC = () => {
  const router = useRouter();
  const { category } = router.query; // Get category from URL
  const dispatch = useDispatch();

  // Fetch food items from Redux store
  const foodItems = useSelector((state: RootState) => state.food.items);
  const [categoryItems, setCategoryItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    if (category && foodItems.length) {
      setCategoryItems(foodItems.filter((item) => item.category === category));
    }
  }, [category, foodItems]);

  // Handle adding to cart
  const handleAddToCart = (item: FoodItem) => {
    dispatch(addToCart(item));
  };

  if (!categoryItems.length) {
    return (
      <div className="container">
        <p className="text-red-500">No items found in this category.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-xl font-bold mb-6">{category} Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryItems.map((item) => (
          <MenuCard
            key={item.id}
            {...item}
            onClick={() => router.push(`/menu/${item.category}/${item.id}`)}
            onAddToCart={() => handleAddToCart(item)} // Add to Cart
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
