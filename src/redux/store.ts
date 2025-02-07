import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice"; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer, // Add user reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
