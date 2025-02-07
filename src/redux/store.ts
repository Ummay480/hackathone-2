import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice"; 
import foodReducer from "./slices/foodSlice"; // ✅ Import food slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    food: foodReducer, // ✅ Add food reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
