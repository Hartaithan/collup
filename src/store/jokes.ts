import { createSlice } from "@reduxjs/toolkit";
import type { JokesState } from "../models/JokeModel";
import type { RootState } from "../models/StoreModel";

const initialState: JokesState = {
  list: null,
};

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {},
});

export const actions = jokesSlice.actions;

export const selectJokesList = (state: RootState) => state.jokes.list;

const jokesReducer = jokesSlice.reducer;

export default jokesReducer;
