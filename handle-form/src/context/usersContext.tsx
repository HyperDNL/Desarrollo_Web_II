import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
import { User } from "../interfaces/User";
import { Props } from "../interfaces/Props";
import { ToastSuccess } from "../components/ToastSuccess";
import { ToastError } from "../components/ToastError";
import { UsersContextType } from "../interfaces/UsersContextType";

const UsersContext = createContext<UsersContextType>({
  users: [],
  addUser: () => {},
  getUsers: () => {},
  getUser: () => Promise.resolve(null),
  updateUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);

  const usersCollection = collection(db, "users");

  const addUser = async (newUser: User) => {
    try {
      const docRef = await addDoc(usersCollection, newUser);
      const createdUser = { id: docRef.id, ...newUser };
      setUsers((prevUsers) => [...prevUsers, createdUser]);
      ToastSuccess("User Created");
    } catch (error) {
      ToastError("User Not Created");
    }
  };

  const getUsers = useCallback(async () => {
    const usersSnapshot = await getDocs(usersCollection);
    const usersData = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as User[];
    setUsers(usersData);
  }, [usersCollection]);

  const getUser = async (id: string): Promise<User | null> => {
    try {
      const userDocRef = doc(db, "users", id);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const user = { id: userDoc.id, ...userDoc.data() } as User;
        return user;
      } else {
        ToastError("User Does Not Exist");
        return null;
      }
    } catch (error) {
      ToastError("Error Getting User");
      return null;
    }
  };

  const updateUser = async (id: string, userData: Partial<User>) => {
    try {
      const userRef = doc(db, "users", id);
      await updateDoc(userRef, userData);
      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user.id === id) {
            return { ...user, ...userData };
          }
          return user;
        })
      );
      ToastSuccess("Updated User");
    } catch (error) {
      ToastError("Failed To Update User");
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const docRef = doc(db, "users", id);
      await deleteDoc(docRef);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      ToastSuccess("User Deleted");
    } catch (error) {
      ToastError("Error Deleting User");
    }
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <UsersContext.Provider
      value={{
        users,
        addUser,
        getUsers,
        getUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

const useUsers = () => useContext(UsersContext);

export { UsersProvider, useUsers };
