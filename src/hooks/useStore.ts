import {
  useDispatch as useRootDispatch,
  useSelector as useRootSelector,
} from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "../models/StoreModel";

export const useDispatch: () => AppDispatch = useRootDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useRootSelector;
