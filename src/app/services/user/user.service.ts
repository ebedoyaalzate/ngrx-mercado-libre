import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { UserPayload, UserCredentials } from './user-payloads';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = `${environment.userApi}api/v1/users`;

  constructor(private http: HttpClient) {}

  login(credentials: UserCredentials): Observable<UserPayload> {
    return this.http
      .post<{ data: UserPayload }>(`${this.apiUrl}/sign_in`, credentials)
      .pipe(map((event: { data: UserPayload }) => event.data));
  }
}
