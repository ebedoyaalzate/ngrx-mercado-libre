import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';

import {
  UserCredentials,
} from '../../services/user/user-payloads';
import { loginRequest } from '../../store/actions/profile.actions';

@Component({
  selector: 'app-unauth',
  templateUrl: './unauth.component.html',
  styleUrls: ['./unauth.component.scss'],
})
export class UnauthComponent {
  credentials: UserCredentials = {
    email: 'homero.simpson@wolox.com',
    password: 'Homero123',
  };

  loginForm: FormGroup = this.formBuilder.group({
    email: [this.credentials.email, [Validators.required, Validators.email]],
    password: [this.credentials.password, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) { }

  signIn(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.store.dispatch(loginRequest({ credentials: this.loginForm.value}));

    // this.userService.login(this.loginForm.value).subscribe(res => {
    //   this.store.dispatch(loginSuccess({ profile: res }))
    // });
  }
}
