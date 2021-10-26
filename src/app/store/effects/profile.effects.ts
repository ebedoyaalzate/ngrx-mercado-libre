import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mapTo, switchMap, tap } from "rxjs/operators";
import { of } from 'rxjs';

import * as profileActions from '../actions/profile.actions';
import { UserService } from '../../services/user/user.service';
import { SessionService } from '../../services/session.service';

@Injectable()
export class ProfileEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private sessionService: SessionService
  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profileActions.loginRequest),
      switchMap(action => this.userService.login(action.credentials).pipe(
        map(profile => profileActions.loginSuccess({ profile })),
        catchError(error => of(profileActions.loginFail({ error })))
      ))
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profileActions.logout),
      mapTo(this.sessionService.removeToken())
    ),
    { dispatch: false }
  );

  loginFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(profileActions.loginFail),
      tap(action => console.log(`Error: ${action.error.message}`))
    ),
    { dispatch: false }
  );
}
