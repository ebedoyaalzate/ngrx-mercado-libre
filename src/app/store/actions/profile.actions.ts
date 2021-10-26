import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { UserCredentials, UserPayload } from "src/app/services/user/user-payloads";

export const loginRequest = createAction(
  '[Profile] Login Request',
  props<{ credentials: UserCredentials }>()
);

export const loginSuccess = createAction(
  '[Profile] Login Success',
  props<{ profile: UserPayload }>()
);

export const loginFail = createAction(
  '[Profile] Login Fail',
  props<{ error: HttpErrorResponse }>()
);

export const logout = createAction('[Profile] Logout');
