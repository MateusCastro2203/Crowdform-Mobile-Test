import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import accountReducer from "./slice";

export const useAppDispatch = () => useDispatch<AppDispatch>();

const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export { store };
