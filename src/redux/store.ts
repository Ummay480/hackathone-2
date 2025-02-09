import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import foodReducer from "./slices/foodSlice"; // Ensure this exists

const store = configureStore({
  reducer: {
    cart: cartReducer,
    food: foodReducer, // Ensure 'food' is included
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
