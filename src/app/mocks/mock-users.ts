import { UserPayload } from '../services/user/user-payloads';

export class MockUsers {
  static userResponse(data?: Partial<UserPayload>): UserPayload {
    return mockUserResponse(data);
  }

  static usersResponse(): UserPayload[] {
    return [
      mockUserResponse({ rol: 'admin', password: 'Homero123' }),
      mockUserResponse({
        id: 2,
        email: 'marge.simpson@wolox.com',
        first_name: 'Marge',
        last_name: 'Simpson',
        password: 'Marge123'
      }),
      mockUserResponse({
        id: 2,
        email: 'bart.simpson@wolox.com',
        first_name: 'Bart',
        last_name: 'Simpson',
        password: 'Bart123'
      }),
      mockUserResponse({
        id: 2,
        email: 'lisa.simpson@wolox.com',
        first_name: 'Lisa',
        last_name: 'Simpson',
        password: 'Lisa123'
      }),
      mockUserResponse({
        id: 2,
        email: 'ned.flanders@wolox.com',
        first_name: 'Ned',
        last_name: 'Flanders',
        password: 'Ned123'
      })
    ];
  }
}

function mockUserResponse(data?: Partial<UserPayload>): UserPayload {
  return {
    id: data?.id ?? 1,
    email: data?.email ?? 'homero.simpson@wolox.com',
    first_name: data?.first_name ?? 'Homero',
    last_name: data?.last_name ?? 'Simpson',
    rol: data?.rol ?? 'regular',
    password: data?.password
  };
}
