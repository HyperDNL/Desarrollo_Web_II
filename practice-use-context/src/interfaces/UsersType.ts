export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}

export type UserContextType = {
  users?: IUser[];
  getUsers: Function;
  isLoadingData: boolean;
};
