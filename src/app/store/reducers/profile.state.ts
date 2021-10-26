import { initialProfileState } from './../state/profile.state';
import { Action, createReducer, on } from "@ngrx/store";
import { createLogin, deleteLogin } from '../actions/profile.actions';
import { UserPayload } from 'src/app/services/user/user-payloads';

const _profileReducer = createReducer(
  initialProfileState,
  on(createLogin, (_, action) => {
    return {
      ...action.profile,
    }
  }),
  on(deleteLogin, () => initialProfileState)
);

export function profileReducer(state: UserPayload | undefined, action: Action):  UserPayload | undefined {
  return _profileReducer(state, action);
}