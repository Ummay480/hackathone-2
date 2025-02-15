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

export interface CartItemProps {
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
  quantity: number;
  onAdd?: () => void;
  onRemove?: () => void;
}