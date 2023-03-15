import React from "react";
import styled from "styled-components";
import { useForm } from "../hooks/useForm";

export const HomePage = () => {
  const {
    name,
    email,
    password,
    error,
    isLoggedIn,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleLogout,
  } = useForm();

  return (
    <div>
      {isLoggedIn ? (
        <Container>
          <h1>Bienvenido, {name}!</h1>
          <button onClick={handleLogout} className="button">
            Cerrar sesión
          </button>
        </Container>
      ) : (
        <Container>
          <h1>Por favor, inicie sesión</h1>
          <form onSubmit={handleSubmit} className="form-container">
            {error && <h3 className="error-message">{error}</h3>}
            <div>
              <label className="label-form">Nombre:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="input-form"
              />
            </div>
            <div>
              <label className="label-form">Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="input-form"
              />
            </div>
            <div>
              <label className="label-form">Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="input-form"
              />
            </div>
            <button type="submit" className="button">
              Iniciar sesión
            </button>
          </form>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button {
    color: #f0f0f0;
    background-color: #2f3036;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #1b1b1f;
    }
  }

  .error-message {
    color: #ed343e;
    text-align: center;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 50%;
  }

  .label-form {
    display: block;
  }

  .input-form {
    height: 2.5rem;
    background-color: #1b1b1f;
    border: none;
    outline-style: none;
    color: #f0f0f0;
    border-radius: 0.5rem;
    width: 100%;
  }
`;
