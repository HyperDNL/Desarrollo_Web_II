import { User } from "./User";

export type UsersContextType = {
  users: User[];
  addUser: (newUser: User) => void;
  getUsers: () => void;
  getUser: (id: string) => Promise<User | null>;
  updateUser: (id: string, userData: Partial<User>) => void;
  deleteUser: (id: string) => void;
};
