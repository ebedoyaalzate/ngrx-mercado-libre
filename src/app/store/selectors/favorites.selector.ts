import { FavoritesState } from './../state/favorites.state';
import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';

export const selectFavoritesState = (state: AppState) => state.favorites;

export const selectAllFavorites = createSelector(
  selectFavoritesState, (state: FavoritesState[]) => state
);

export const selectFavoritesCount = createSelector(
  selectAllFavorites,
  (state: FavoritesState[]) => state.length
);

export const selectHasFavorites = createSelector(
  selectAllFavorites,
  (state: FavoritesState[]) => !!state.length
);

export const selectPrincipalFavorites = createSelector(
  selectAllFavorites,
  (state: FavoritesState[]) => state.splice(0, 5)
);
