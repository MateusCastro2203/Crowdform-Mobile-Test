import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAccountData } from "./types";

export const slice = createSlice({
  name: "accountLogin",
  initialState: {
    data: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    } as TAccountData,
  },
  reducers: {
    putAccountData: (state, action: PayloadAction<TAccountData>) => {
      state.data = action.payload;
    },
  },
});

export const { putAccountData } = slice.actions;
export default slice.reducer;
