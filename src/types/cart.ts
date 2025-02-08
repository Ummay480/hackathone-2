// types/food.ts
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string; // Make sure this matches across all files
  price: number;
  stock: number;
}


export interface CartItemProps {
  id: string;
  name: string;
  image?: { asset?: { url?: string } }; 
  stock: number;
  item: FoodItem; // ✅ Change from string to FoodItem
  price: number;
  quantity: number;
  onAdd?: () => void;
  onRemove: () => void;
}
