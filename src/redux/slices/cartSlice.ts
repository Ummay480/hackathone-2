import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps } from "@/types/cart";

interface CartState {
  items: CartItemProps[];
  totalAmount: number; // ✅ Add totalAmount here
}

const initialState: CartState = {
  items: [],
  totalAmount: 0, // ✅ Initialize totalAmount
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemProps>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      state.totalAmount += action.payload.price; // ✅ Update totalAmount
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state.totalAmount -= state.items[itemIndex].price * state.items[itemIndex].quantity; // ✅ Subtract total price
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
