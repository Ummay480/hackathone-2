"use client";
import { FC, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation"; 
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart } from "@/redux/slices/cartSlice";
import MenuCard from "@/components/MenuCard";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: {
    string?: string;
    asset?: {
      url?: string;
    };
  };
}

const CategoryPage: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams(); 

  const category = searchParams.get("category") || "";

  const foodItems = useSelector((state: RootState) => state.food.items) || [];

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
        description: item.description,
        price: item.price,
        category: item.category,
        image: item?.image?.asset?.url ?? "", // ✅ Correct way to extract image URL
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




