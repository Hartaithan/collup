import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { JokesState } from "../../models/JokeModel";
import { jokesSearch } from "./actions";

const initialState: JokesState = {
  isLoading: false,
  total: 0,
  list: null,
};

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    resetList: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(jokesSearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(jokesSearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload.result;
      state.total = action.payload.total;
    });
    builder.addCase(jokesSearch.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default jokesSlice.reducer;
