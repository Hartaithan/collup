import { createAsyncThunk } from "@reduxjs/toolkit";
import { jokesSlice } from "./reducer";
import API from "../../helpers/api";
import type { JokeSearchResponse } from "../../models/JokeModel";

export const jokesSearch = createAsyncThunk<JokeSearchResponse, string>(
  "jokes/search",
  async (query: string) => {
    const response = await API.get<JokeSearchResponse>(
      "/jokes/search?query=" + query,
    );
    return response.data;
  },
);

export const actions = jokesSlice.actions;
