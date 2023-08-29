import type { RootState } from "../../models/StoreModel";

export const selectJokes = (state: RootState) => state.jokes;
export const selectJokesTotal = (state: RootState) => state.jokes.total;
export const selectJokesList = (state: RootState) => state.jokes.list;
