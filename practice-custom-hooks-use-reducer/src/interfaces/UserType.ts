export type UserState = {
  name: string;
  email: string;
  password: string;
  error: string | null;
  isLoggedIn: boolean;
};
