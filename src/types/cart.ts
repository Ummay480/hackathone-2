export interface CartItemProps {
  id: string;
  item: string;
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

export interface FoodItem {
  id: string;
  item: string;
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
  quantity?: number;
}