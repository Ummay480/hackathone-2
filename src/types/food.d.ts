interface FoodItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: { 
    string?: string; 
    asset?: { url?: string }; 
  };
  stock: number;
  price: number;
  // ... any other properties a FoodItem might have
}

export interface CartItemProps {
  // ... other properties
  item: FoodItem; // Now TypeScript knows what FoodItem is
  // ...
}