import { initialFavoriteState, FavoritesState } from './favorites.state';

export interface AppState {
  favorites: FavoritesState[];
}

export const initialAppState: AppState = {
  favorites: initialFavoriteState
};

export const getInitialState = () => {
  return initialAppState;
};
