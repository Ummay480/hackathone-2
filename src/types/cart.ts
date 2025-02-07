export interface CartItemProps {
  id: string;
  name: string;
  image: string;
  stock: number;
  price: number;
  quantity: number;
  onAdd?: () => void; // ✅ Optional to prevent errors
  onRemove: () => void;
}
