import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./slices/foodSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    food: foodReducer,  // Ensure 'food' is properly included
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
