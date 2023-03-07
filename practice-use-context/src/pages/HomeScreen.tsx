import React from "react";
import { useUsers } from "../context/usersContext";

export const HomeScreen = () => {
  const users = useUsers()?.users;

  const destructuringUsers = users?.map(
    ({ id, name, email, phone, company }) => {
      return {
        id: id,
        name: name,
        email: email,
        phone: phone,
        company: {
          name: company.name,
        },
      };
    }
  );

  return <></>;
};
