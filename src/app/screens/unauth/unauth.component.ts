import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  UserCredentials,
} from '../../services/user/user-payloads';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-unauth',
  templateUrl: './unauth.component.html',
  styleUrls: ['./unauth.component.scss'],
})
export class UnauthComponent implements OnInit {
  credentials: UserCredentials = {
    email: 'julian.lopera@accenture.com',
    password: 'Contraseña1',
  };

  loginForm: FormGroup = this.formBuilder.group({
    email: [this.credentials.email, [Validators.required, Validators.email]],
    password: [this.credentials.password, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  signIn(): void {
    this.userService.login(this.loginForm.value).subscribe((_) => console.log);
  }
}
