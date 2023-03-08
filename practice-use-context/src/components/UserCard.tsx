import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { IUser } from "../interfaces/UsersType";

export const UserCard = ({ id, name, email, phone, company }: IUser) => {
  return (
    <>
      <CardContainer>
        <div className="header-card">
          <FaUserCircle className="user-avatar" />
          <h2>{name}</h2>
        </div>
        <div className="card-body">
          <div className="column">
            <div className="row">
              <span className="card-tag">ID No:</span>
              <span>{id}</span>
            </div>
            <div className="row">
              <span className="card-tag">Company:</span>
              <span>{company.name}</span>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <span className="card-tag">E-Mail:</span>
              <span>{email}</span>
            </div>
            <div className="row">
              <span className="card-tag">Phone Number:</span>
              <span>{phone}</span>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  background-color: #424858;
  padding: 2rem;
  border-radius: 1rem;

  .header-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .user-avatar {
    font-size: 90px;
  }

  .card-body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    justify-items: stretch;
    align-items: stretch;
  }

  .card-tag {
    font-weight: bold;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
