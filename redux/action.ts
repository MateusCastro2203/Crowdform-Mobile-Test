import { AppDispatch } from "./store";
import { putAccountData } from "./slice";
import { TAccountData } from "./types";

export const getAccount =
  (values: TAccountData) => async (dispatch: AppDispatch) => {
    const response = await dispatch(putAccountData(values));
    return response;
  };
