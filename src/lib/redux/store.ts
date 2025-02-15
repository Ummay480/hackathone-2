'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import foodReducer from './slices/foodSlice';
import ordersReducer from './slices/orderSlice';
import userReducer from './slices/userSlice';

// ✅ Combine reducers correctly
const rootReducer = combineReducers({
  cart: cartReducer,
  food: foodReducer,
  orders: ordersReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
