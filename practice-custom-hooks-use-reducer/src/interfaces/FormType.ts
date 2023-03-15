export type FormAction =
  | { type: "setName"; payload: string }
  | { type: "setEmail"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setError"; payload: string }
  | { type: "reset" }
  | { type: "login" }
  | { type: "logout" };
