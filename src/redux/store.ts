import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // Ensure correct import

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Ensure this exists
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


