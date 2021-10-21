import { FavoritesState } from './../state/favorites.state';
import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
 
 
export const selectFavorites = (state: AppState) => state.favorites;
 
export const selectFavoritesCount = createSelector(
  selectFavorites,
  (state: FavoritesState[]) => state.length
);

export const selectHasFavorites = createSelector(
  selectFavorites,
  (state: FavoritesState[]) => !!state.length
);

export const selectPrincipalFavorites = createSelector(
  selectFavorites,
  (state: FavoritesState[]) => state.splice(0, 5)
);