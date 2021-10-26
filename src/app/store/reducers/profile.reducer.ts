import { initialProfileState } from '../state/profile.state';
import { Action, createReducer, on } from "@ngrx/store";
import { loginSuccess, logout, loginFail } from '../actions/profile.actions';
import { UserPayload } from 'src/app/services/user/user-payloads';

const _profileReducer = createReducer(
  initialProfileState,
  on(loginSuccess, (_, action) => {
    return {
      ...action.profile,
    }
  }),
  on(logout, () => undefined)
);

export function profileReducer(state: UserPayload | undefined, action: Action):  UserPayload | undefined {
  return _profileReducer(state, action);
}
