import { configureStore } from "@reduxjs/toolkit";
import jokesReducer from "./jokes/reducer";

export const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
});
