import { createSlice } from "@reduxjs/toolkit";
import type { JokesState } from "../../models/JokeModel";
import { jokesSearch } from "./actions";

const initialState: JokesState = {
  isLoading: false,
  list: null,
};

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(jokesSearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(jokesSearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(jokesSearch.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default jokesSlice.reducer;
