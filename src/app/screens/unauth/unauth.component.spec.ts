import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { UserCredentials } from '../../services/user/user-payloads';
import { loginRequest } from '../../store/actions/profile.actions';
import { UnauthComponent } from './unauth.component';

const credentials: UserCredentials = {
  email: 'homero.simpson@wolox.com',
  password: 'Homero123',
};

describe('UnauthComponent', () => {
  let component: UnauthComponent;
  let fixture: ComponentFixture<UnauthComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnauthComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        FlexLayoutModule
      ],
      providers: [provideMockStore()]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    jest.spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('signIn', () => {
    it('should dispatch a loginRequest action', () => {
      // GIVEN
      const action = loginRequest({ credentials })
      component.credentials = credentials;
      component.loginForm.markAllAsTouched();

      // WHEN
      component.signIn();

      // THEN
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });
});
