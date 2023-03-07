import { useState, createContext, useContext, useEffect } from "react";
import { getUsersRequests } from "../api/requests";
import { IUser, UserContextType } from "../interfaces/UsersType";
import { Props } from "../interfaces/Props";

const usersContext = createContext<UserContextType | null>(null);

export const useUsers = () => {
  const context = useContext(usersContext);
  return context;
};

export const UsersProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<IUser[]>();

  const getUsers = async () => {
    const res = await getUsersRequests();
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <usersContext.Provider value={{ users, getUsers }}>
      {children}
    </usersContext.Provider>
  );
};
