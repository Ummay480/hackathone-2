import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // Ensure this is the correct reducer
import foodReducer from "./slices/foodSlice"; // Ensure this is the correct reducer
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer} from "redux-persist";
import type { Middleware } from "redux"; // Explicit type for middleware

// ✅ Persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// ✅ Combine reducers
const rootReducer = combineReducers({
  product: foodReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Middleware handling
const middleware: Middleware[] = []; // Explicitly define middleware array

// ✅ Configure Store
export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleware), // Ensure middleware is used correctly
});

// ✅ Create persistor
export const persistor = persistStore(Store);

// ✅ Store Types
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
