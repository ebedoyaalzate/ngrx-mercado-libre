import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-unauth',
  templateUrl: './unauth.component.html',
  styleUrls: ['./unauth.component.scss']
})
export class UnauthComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.userService.login(this.loginForm.value).subscribe (res => {
      console.log(res)
      const sessionData = {
        token: res.headers.get('access-token'),
        client: res.headers.get('client'),
        uid: res.headers.get('uid')
      };
      this.sessionService.saveSessionData(sessionData);
      this.router.navigate(['home'])
    })
  }
}
