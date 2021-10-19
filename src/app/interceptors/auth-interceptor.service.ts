import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpClient,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { SessionService } from '../services/session.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private sessionService: SessionService, private router: Router, httpClient: HttpClient) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessTokenHeader = 'access-token';
    const clientHeader = 'client';
    const uidHeader = 'uid';
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (
          event instanceof HttpResponse &&
          event.headers.has(accessTokenHeader) &&
          event.headers.has(clientHeader) &&
          event.headers.has(uidHeader)
        ) {
          this.sessionService.saveSessionData({
            token: event.headers.get(accessTokenHeader),
            client: event.headers.get(clientHeader),
            uid: event.headers.get(uidHeader),
          });
          this.router.navigate(['home'])
        }
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
