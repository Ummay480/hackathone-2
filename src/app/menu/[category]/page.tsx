"use client";
import { FC, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation"; 
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import MenuCard from "@/components/MenuCard";
import type { FoodItem } from "@/types/food";

const CategoryPage: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams(); 

  const category = searchParams.get("category") || "";

  const [foodItems] = useState<FoodItem[]>([]);
  const [categoryItems, setCategoryItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    if (category && foodItems.length) {
      setCategoryItems(foodItems.filter((item) => item.category === category));
    }
  }, [category, foodItems]);

  const handleAddToCart = (item: FoodItem) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        category: item.category,
        description: item.description,
        price: item.price,
        image: item.image ?? {}, // ✅ Ensures correct image structure
        quantity: 1,
        stock: 10,
      })
    );
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
            onAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
