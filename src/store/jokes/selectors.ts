import type { RootState } from "../../models/StoreModel";

export const selectJokes = (state: RootState) => state.jokes;
export const selectJokesTotal = (state: RootState) => state.jokes.total;
export const selectJokesList = (state: RootState) => state.jokes.list;
export const selectJokesLoading = (state: RootState) => state.jokes.isLoading;

const initialSize = 11;
const pageSize = 9;

export const selectJokesListPagination = (state: RootState, page: number) => {
  let endIndex = initialSize;
  if (page > 1) {
    endIndex = initialSize + (page - 1) * pageSize;
  }
  if (state.jokes.list === null) return [];
  return state.jokes.list.slice(0, endIndex);
};
