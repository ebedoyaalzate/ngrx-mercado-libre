export type UserPayload = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  rol: string;
  password?: string;
};

export type UserCredentials = {
  email: string;
  password: string;
};
