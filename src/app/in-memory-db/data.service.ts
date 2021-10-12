import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import * as db from './db-payloads';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      users: db.users
    };
  }

  post(reqInfo: RequestInfo) {
    if (reqInfo.url === 'api/users/login') {
      return this.authenticate(reqInfo)
    }
    return undefined
  }

  authenticate(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const { url, req, headers } = reqInfo
      const { email, password } = reqInfo.utils.getJsonBody(req);
      let user = db.users.find(user => user.email === email && user.password === password);
      if (user) {
        const accessHeaders = new HttpHeaders({
          'access-token': '19z3UVZhpVJD17z1aybBOA',
          'client': '0RSlL8fsup0tT-KGNpkitw',
          'uid': email
        });
        delete user['password'];
        return {
          status: 200,
          headers: accessHeaders,
          url,
          body: user
        }
      }
      return {
        status: 401,
        headers,
        url,
        body: {}
      }
    })
  }
}
