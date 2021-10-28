import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";

export const selectProfile = (state: AppState) => state.profile;

export const selectProfileName = createSelector(
  selectProfile,
  (state) => state?.first_name,
);
