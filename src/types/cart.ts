export interface CartItems {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  image: string; // ✅ Ensure this property exists
}
