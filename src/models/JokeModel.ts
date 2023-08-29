export interface Joke {
  id: string;
  created_at: string;
  updated_at: string;
  value: string;
  icon_url: string;
  url: string;
  categories: string[];
}

export interface JokesState {
  isLoading: boolean;
  total: number;
  list: Joke[] | null;
}

export interface JokeSearchResponse {
  total: number;
  result: Joke[];
}
