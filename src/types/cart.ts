export interface FoodItem {
  id: string;
  name: string;
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
}

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