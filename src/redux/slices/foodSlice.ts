import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodItem } from "@/types/food"; // Import from types

interface FoodState {
  items: FoodItem[];
}

const initialState: FoodState = {
  items: [],
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFood: (state, action: PayloadAction<FoodItem[]>) => {
      state.items = action.payload;
    },
    addFood: (state, action: PayloadAction<FoodItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { setFood, addFood } = foodSlice.actions;
export default foodSlice.reducer;
