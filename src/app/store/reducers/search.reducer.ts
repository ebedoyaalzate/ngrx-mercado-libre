import { searchItemsError, searchItemsSuccess } from './../actions/search.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { initialSearchState, SearchState } from '../state/search.state';

const _searchReducer = createReducer(
  initialSearchState,
  on(searchItemsSuccess, (_, action) => {
    return action.search
  }),
  on(searchItemsError, (_, action) => {
    return {
      query: action.query,
      items: []
    }
  })
)

export function searchReducer(state: SearchState | undefined, action: Action): SearchState {
  return _searchReducer(state, action)
}
