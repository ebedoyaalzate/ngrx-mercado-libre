import { Action, ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { favoriteReducer } from './favorites.reducer';

export const appReducers: ActionReducerMap<AppState, Action> = {
  favorites: favoriteReducer
};
