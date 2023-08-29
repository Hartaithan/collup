import type { RootState } from "../../models/StoreModel";

export const selectJokesList = (state: RootState) => state.jokes.list;
