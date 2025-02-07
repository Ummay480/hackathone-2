export interface CartItemProps {
  id: string;
  name: string;
  image: string;
  stock: number;
  price: number;
  quantity: number;
  onAdd?: () => void;  // ✅ Make it optional to avoid errors
  onRemove: () => void;
}


