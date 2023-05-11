import { useState } from "react";
import { InputHook } from "../interfaces/InputHook";

const useForm = <T extends string | number>(
  initialValue: T = "" as T
): InputHook<T> => {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const handleChangeString = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value as T;

    setValue(inputValue);

    if (!inputValue) {
      setError("The field cannot be empty");
      setHasError(true);
    } else {
      setError("");
      setHasError(false);
    }
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value);

    if (isNaN(inputValue) || inputValue <= 0) {
      setValue(0 as T);
      setError("The value must be a number greater than zero");
      setHasError(true);
    } else {
      setValue(inputValue as T);
      setError("");
      setHasError(false);
    }
  };

  const setStateAction = (newValue: T) => {
    const inputValue = newValue as T;

    if (inputValue !== undefined && inputValue !== null) {
      setValue(newValue);
      setError("");
      setHasError(false);
    } else {
      setError("The field cannot be empty");
      setHasError(true);
    }
  };

  return [
    value,
    typeof value === "number" ? handleChangeNumber : handleChangeString,
    hasError,
    error,
    setStateAction,
  ];
};

export default useForm;
