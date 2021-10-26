import { createReducer, on, Action } from '@ngrx/store';
import { FavoritesState } from '../state/favorites.state';
import { addFavorite, deleteFavorite, cleanFavorites } from '../actions/favorites.actions';
import { initialFavoriteState } from '../state/favorites.state';
 
 
const _favoriteReducer = createReducer(
  initialFavoriteState,
  on(addFavorite, (state, action) => {
    return [
      ...state,
     action.product,
    ]
  }),
  on(deleteFavorite, (state, action) => {
    const newState = state.filter(product => product.id !== action.product.id)
    return newState
  }),
  on(cleanFavorites, (state) => [])
);
 
export function favoriteReducer(state: FavoritesState[] | undefined, action: Action): FavoritesState[] {
  return _favoriteReducer(state, action);
}