import { createAction ,props } from '@ngrx/store';
import { UserPayload } from "src/app/services/user/user-payloads";

export const createLogin = createAction(
  '[Profile] Create Login', 
  props<{profile: UserPayload}>()
);
export const deleteLogin = createAction('[Profile] Delete Login');

