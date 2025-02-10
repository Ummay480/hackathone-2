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

  // ✅ Get category from URL parameters
  const category = searchParams.get("category") || "All Items";

  // ✅ Food items state (Temporary placeholder data)
  const [foodItems] = useState<FoodItem[]>([
    {
      id: "1",
      name: "Burger",
      category: "Fast Food",
      description: "A delicious cheeseburger.",
      image: { asset: { url: "/images/burger.jpg" } },
      stock: 10,
      price: 5,
    },
    {
      id: "2",
      name: "Pizza",
      category: "Fast Food",
      description: "Tasty pepperoni pizza.",
      image: { asset: { url: "/images/pizza.jpg" } },
      stock: 8,
      price: 12,
    },
  ]);

  // ✅ Filter items based on selected category
  const [categoryItems, setCategoryItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    if (category && foodItems.length) {
      setCategoryItems(
        category === "All Items"
          ? foodItems
          : foodItems.filter((item) => item.category === category)
      );
    }
  }, [category, foodItems]);

  // ✅ Add to Cart Function
  const handleAddToCart = (item: FoodItem) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        category: item.category,
        description: item.description,
        image: item.image ?? {}, // ✅ Ensure image structure
        stock: item.stock,
        price: item.price,
        quantity: 1,
        item,
        onAdd: () => handleAddToCart(item),
        onRemove: () => {}, // Placeholder if needed
      })
    );
  };

  // ✅ Handle empty category items
  if (!categoryItems.length) {
    return (
      <div className="container mx-auto text-center py-10">
        <p className="text-red-500 text-lg">No items found in this category.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">{category} Menu</h1>
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
