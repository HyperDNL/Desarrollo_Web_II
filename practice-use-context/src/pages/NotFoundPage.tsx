import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundPage = () => {
  return (
    <>
      <NotFoundContainer>
        <h1>
          <span className="red-text">Oops!</span> Page Not Found
        </h1>
        <p>The page you were looking for does not exist.</p>
        <Link to={"/"} className="link-home">
          Go Home
        </Link>
      </NotFoundContainer>
    </>
  );
};

const NotFoundContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .red-text {
    color: #ed343e;
  }

  .link-home {
    text-decoration: none;
    color: #f0f0f0;
    font-weight: bold;
  }
`;
