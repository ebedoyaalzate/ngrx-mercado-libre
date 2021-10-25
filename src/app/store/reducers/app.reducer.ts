import { Action, ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { favoriteReducer } from './favorites.reducer';
import { profileReducer } from './profile.state';

export const appReducers: ActionReducerMap<AppState, Action> = {
  favorites: favoriteReducer,
  profile: profileReducer,
};
