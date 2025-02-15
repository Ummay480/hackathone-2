import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemProps } from "@/types/cart";

interface CartState {
  items: CartItemProps[];
  total: number; // Add total field
}

const initialState: CartState = {
  items: [],
  total: 0, // Initialize total
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemProps>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity; // Update total
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      if (itemToRemove) {
        state.total -= itemToRemove.price * itemToRemove.quantity; // Update total when removing
      }
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;