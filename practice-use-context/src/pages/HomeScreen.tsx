import React from "react";
import styled from "styled-components";
import { useUsers } from "../context/usersContext";
import { IUser } from "../interfaces/UsersType";
import { UserCard } from "../components/UserCard";
import { device } from "../styles/responsive";
import { Loader } from "../components/Loader";

export const HomeScreen = () => {
  const { users, isLoadingData }: any = useUsers();

  const mappingUsers: IUser[] = users?.map(
    ({ id, name, email, phone, company }: IUser) => {
      return {
        id,
        name,
        email,
        phone,
        company: {
          name: company.name,
        },
      };
    }
  );

  return (
    <>
      {isLoadingData ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

const HomeContainer = styled.div`
  @media ${device.mobileSS} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  @media ${device.mobileS} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
  }

  @media ${device.mobileM} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
  }

  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
  }

  @media ${device.laptopL} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
  }

  @media ${device.desktop} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
  }
`;
