import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import FoodItem from "./slices/foodSlice";
import middleware from "@/middleware";
import CartItem from "@/components/CartItemComponent";


const persistconfiq = {
  key:"root",
  version:1,
  storage,
}

const reducer = combineReducers({
  product:FoodItem,
  cart:CartItem
})

const persistedReducer = persistReducer(persistconfiq,reducer)


export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}),
 
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch
export default {Store, reducer};