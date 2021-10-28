import { UserPayload } from 'src/app/services/user/user-payloads';
import { initialFavoriteState, FavoritesState } from './favorites.state';
import { initialProfileState } from './profile.state';

export interface AppState {
  favorites: FavoritesState[];
  profile: UserPayload;
}

export const initialAppState: AppState = {
  favorites: initialFavoriteState,
  profile: initialProfileState
};

export const getInitialState = () => {
  return initialAppState;
};
