import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { environment } from '../../environments/environment';

const singInURL = `${environment.userApi}api/v1/users/sign_in`;

export class MockSessionService {
  saveSessionData = jest.fn();
}
describe('AuthInterceptorService', () => {
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true,
        }
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify());

  it('should expect none', () => {
    const req = httpController.expectNone(singInURL);
  });


  it('Test', () => {
    // GIVEN
    const session = {
      uid: 'julian.lopera@accenture.com',
      client: '0RSlL8fsup0tT-KGNpkitw',
      token: '19z3UVZhpVJD17z1aybBOA',
    };

    // WHEN
    httpClient.post(singInURL, '').subscribe();
    const error = new ErrorEvent('test error');
    const req = httpController.expectOne(req => req.method === 'POST' && req.url === singInURL);
    req.flush({});

    // THEN
  });
});
