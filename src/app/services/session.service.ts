import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  saveSessionData(session: any): void {
    if(session.token !== '' || session.token !== undefined){
      localStorage.setItem('token', session.token);
      localStorage.setItem('uid', session.uid);
      localStorage.setItem('client', session.client);
    }
  } 

  getSessionData(): any {
    if('token' in localStorage && 'client' in localStorage && 'uid' in localStorage) {
      return {
        token: localStorage.getItem('token'),
        client: localStorage.getItem('client'),
        uid: localStorage.getItem('uid')
      }
    }else{
      return {
        token: '',
        client: '',
        uid: ''
      }
    }
  }

  removeToken(): void {
    return localStorage.clear();
  }
}
