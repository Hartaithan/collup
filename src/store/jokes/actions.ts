import { createAsyncThunk } from "@reduxjs/toolkit";
import { jokesSlice } from "./reducer";
import API from "../../helpers/api";
import type { Joke, JokeSearchResponse } from "../../models/JokeModel";

export const jokesSearch = createAsyncThunk<Joke[], string>(
  "jokes/search",
  async (query: string) => {
    const response = await API.get<JokeSearchResponse>(
      "/jokes/search?query=" + query,
    );
    return response.data.result;
  },
);

export const actions = jokesSlice.actions;
