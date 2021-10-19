import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserPayload, UserCredentials } from './user-payloads';
import { httpOptions } from '../../shared/http-options';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  login(credentials: UserCredentials): Observable<UserPayload> {
    return this.http.post<UserPayload>(`${this.usersUrl}/login`, credentials, httpOptions);
  }

  listUsers(): Observable<UserPayload[]> {
    return this.http.get<UserPayload[]>(this.usersUrl, httpOptions);
  }
}
