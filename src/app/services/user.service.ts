import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = `${environment.userApi}api/v1/users`;

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  login(user: any): Observable<any>{
    return this.http
      .post(`${this.apiUrl}/sign_in`, user,  { observe: 'response' })
  }
}
