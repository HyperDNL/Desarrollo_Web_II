import { useReducer } from "react";
import { formReducer } from "../reducers/FormReducer";

export const useForm = () => {
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    password: "",
    error: null,
    isLoggedIn: false,
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setName", payload: event.target.value });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setEmail", payload: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setPassword", payload: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      state.email === "daniel@mail.com" &&
      state.password === "12345" &&
      state.name.trim() !== ""
    ) {
      dispatch({ type: "login" });
    } else {
      dispatch({
        type: "setError",
        payload: "Los datos de inicio de sesión son incorrectos.",
      });
    }
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
    dispatch({ type: "reset" });
  };

  return {
    name: state.name,
    email: state.email,
    password: state.password,
    error: state.error,
    isLoggedIn: state.isLoggedIn,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleLogout,
  };
};
