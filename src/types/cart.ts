
export interface CartItemProps {
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
  quantity: number;
  onAdd?: () => void;
  onRemove?: () => void; // ✅ Made optional
}
