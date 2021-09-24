export type UserPayload = {
  id: number;
  email: string;
  provider: string;
  uid: string;
  allow_password_change: boolean;
  first_name: string;
  last_name: string;
  locale: string;
};

export type UserCredentials = {
  email: string;
  password: string;
};
