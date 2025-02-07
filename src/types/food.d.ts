export interface FoodItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number; // ✅ Add stock
  imageUrl?: string; // ✅ Add imageUrl (optional if needed)
}
