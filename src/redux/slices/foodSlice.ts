import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FoodItem {
  id: string;
  name: string;
  price: number;
}

interface FoodState {
  items: FoodItem[];
}

const initialState: FoodState = {
  items: [],
};

const foodSlice = createSlice({
  name: 'food',
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
