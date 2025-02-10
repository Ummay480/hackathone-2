export interface CartItemProps { 
  id: string;
  name: string;
  item: string;
  category: string;  // ✅ Ensure this exists
  description: string;
  image?: { 
    string?: string; 
    asset?: { url?: string }; 
  };
  stock: number;
  price: number;
  quantity: number;
  onAdd?: () => void;
  onRemove?: () => void;
}
