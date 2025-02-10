// app/redux/store.ts
'use client'; // If this is a client component

import { configureStore } from '@reduxjs/toolkit'; // Or your Redux setup

// ... your reducers ...
const rootReducer = {
  // ... your reducers here
  // Example:
  // cart: cartReducer,
  // user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
  // ... any other store configurations ...
});

export type RootState = ReturnType<typeof store.getState>; // Important for TypeScript
export type AppDispatch = typeof store.dispatch; // Important for TypeScript

export default store; // Correct default export