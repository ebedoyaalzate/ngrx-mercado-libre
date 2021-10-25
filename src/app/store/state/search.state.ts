import { FavoritesState } from "./favorites.state";

export interface SearchState {
  query: string,
  items: any
}

export const initialSearchState: SearchState = {
  query: '',
  items: null
}