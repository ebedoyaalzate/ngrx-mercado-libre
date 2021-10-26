import { createAction ,props } from '@ngrx/store';
import { FavoritesState } from '../state/favorites.state';

export const addFavorite = createAction(
  '[Favorites] Add Favorite', 
  props<{product: FavoritesState}>()
);
export const deleteFavorite = createAction(
  '[Favorites] Delete Favorite', 
  props<{product: FavoritesState}>()
);
export const cleanFavorites = createAction('[Favorites] Clean Favorites');

