export interface FoodItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
  stock: number;
  price: number;
}

export interface FoodCardProps {
  item: FoodItem; // Update this to match the FoodItem type
}

// Define the CartItemProps interface
export interface CartItemProps {
  id: string;
  name: string;
  item: string; // This should match the `id` of the FoodItem
  category: string;
  description: string;
  image?: {
    string?: string;
    asset?: {
      url?: string;
    };
  };
  stock: number;
  price: number;
  quantity: number;
  onAdd?: () => void;
  onRemove?: () => void;
}

// Define the FoodCardProps interface
export interface FoodCardProps {
  item: FoodItem; // The `item` prop should be of type FoodItem
}