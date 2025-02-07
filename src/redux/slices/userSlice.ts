import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      return action.payload; // Replacing state with new user data
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
