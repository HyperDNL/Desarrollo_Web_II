import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const NavbarRef = useRef<HTMLElement>(null);

  const showNavbar = () => {
    NavbarRef.current?.classList.toggle("responsive-navbar");
  };

  const hideNavbar = () => {
    NavbarRef.current?.classList.remove("responsive-navbar");
  };

  return (
    <NavbarContainer>
      <h2>Practice</h2>
      <nav ref={NavbarRef} className="routes">
        <LinkStyled to="/" onClick={hideNavbar} className="route">
          Home
        </LinkStyled>
        <FaTimes className="nav-button fa-times" onClick={showNavbar} />
      </nav>
      <FaBars className="nav-button fa-bars" onClick={showNavbar} />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  background-color: #252831;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 2rem 0 2rem;

  .nav-button {
    font-size: 2rem;
    cursor: pointer;
    visibility: hidden;
  }

  .fa-bars {
    &:hover {
      color: #f24949;
    }
  }

  .fa-times {
    color: #ed343e;
  }

  .routes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    .nav-button {
      visibility: visible;
    }

    .routes {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #252831;
      transition: all 1s;
      transform: translateY(-100vh);
    }

    .route {
      font-size: 2rem;
    }

    .responsive-navbar {
      transform: none;
    }

    .fa-times {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #f0f0f0;
  transition: all 0.6s;

  &:hover {
    color: #f24949;
  }
`;
