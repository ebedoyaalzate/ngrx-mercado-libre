import { createAction, props } from "@ngrx/store";
import { SearchState } from "../state/search.state";

export enum searchActions {
  searchItems = '[Search] Search Items',
  searchItemsSuccess = '[Search] Search Items Success',
  searchItemsError = '[Search] Search Items Error',
}

export const searchItems = createAction(
  searchActions.searchItems,
  props<{ query: string }>()
);

export const searchItemsSuccess = createAction(
  searchActions.searchItemsSuccess,
  props<{ search: SearchState }>()
);

export const searchItemsError = createAction(
  searchActions.searchItemsError,
  props<{ query: string }>()
);
