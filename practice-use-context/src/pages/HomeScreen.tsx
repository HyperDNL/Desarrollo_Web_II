import React from "react";
import styled from "styled-components";
import { useUsers } from "../context/usersContext";
import { IUser } from "../interfaces/UsersType";
import { UserCard } from "../components/UserCard";

export const HomeScreen = () => {
  const { users }: any = useUsers();

  const mappingUsers: IUser[] = users?.map(
    ({ id, name, email, phone, company }: IUser) => {
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

  return (
    <>
      <HomeContainer>
        {mappingUsers?.map(({ id, name, email, phone, company }: IUser) => (
          <UserCard
            key={id}
            id={id}
            name={name}
            email={email}
            phone={phone}
            company={company}
          />
        ))}
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  justify-items: stretch;
  align-items: stretch;
`;
