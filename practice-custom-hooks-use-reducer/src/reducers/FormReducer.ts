import { UserState } from "../interfaces/UserType";
import { FormAction } from "../interfaces/FormType";

export const formReducer = (state: UserState, action: FormAction) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "setError":
      return { ...state, error: action.payload };
    case "reset":
      return {
        name: "",
        email: "",
        password: "",
        error: null,
        isLoggedIn: false,
      };
    case "login":
      return { ...state, isLoggedIn: true };
    case "logout":
      return { ...state, isLoggedIn: false };
    default:
      throw new Error("Unsupported action type");
  }
};
