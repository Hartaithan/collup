import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { JokesState } from "../models/JokeModel";
import type { RootState } from "../models/StoreModel";

const initialState: JokesState = {
  search: "",
  list: null,
};

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    submitSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { submitSearch } = jokesSlice.actions;

export const selectSearch = (state: RootState) => state.jokes.search;
export const selectJokesList = (state: RootState) => state.jokes.list;

export default jokesSlice.reducer;
