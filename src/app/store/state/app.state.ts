import { UserPayload } from 'src/app/services/user/user-payloads';
import { initialFavoriteState, FavoritesState } from './favorites.state';
import { initialProfileState } from './profile.state';
import { initialSearchState, SearchState } from './search.state';

export interface AppState {
  favorites: FavoritesState[];
  profile: UserPayload | undefined;
  search: SearchState | undefined;
}

export const initialAppState: AppState = {
  favorites: initialFavoriteState,
  profile: initialProfileState,
  search: initialSearchState,
};

export const getInitialState = () => {
  return initialAppState;
};
