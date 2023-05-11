import React from "react";
import {
  makeStyles,
  shorthands,
  tokens,
  useId,
  Label,
  Button,
} from "@fluentui/react-components";
import { Grid, Input } from "@mui/material";
import styled from "styled-components";
import { DividerSection } from "../components/DividerSection";
import useForm from "../hooks/useForm";
import { ToastError } from "../components/ToastError";
import { useUsers } from "../context/usersContext";
import { User } from "../interfaces/User";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalXXS,
    marginTop: tokens.spacingVerticalMNudge,
    ...shorthands.padding(tokens.spacingHorizontalMNudge),
  },
});

export const HomePage = () => {
  const [name, handleNameChange, nameError, nameErrorMessage] =
    useForm<string>("");
  const [position, handlePositionChange, positionError, positionErrorMessage] =
    useForm<string>("");
  const [salary, handleSalaryChange, salaryError, salaryErrorMessage] =
    useForm<number>(0);

  const { addUser } = useUsers();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !position || !salary) {
      ToastError("Error in the form");
    } else {
      const userData: User = {
        name,
        position,
        salary,
      };
      addUser(userData);
    }
  };

  const nameId = useId("name");
  const positionId = useId("position");
  const salaryId = useId("salary");
  const styles = useStyles();

  return (
    <>
      <DividerSection text="Register User" />
      <Container>
        <form className={styles.base} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <Label htmlFor={nameId}>Name:</Label>
            <Input
              type="text"
              id={nameId}
              value={name}
              onChange={handleNameChange}
            />
            {nameError && (
              <span style={{ color: "red" }}>{nameErrorMessage}</span>
            )}
          </div>
          <div className={styles.field}>
            <Label htmlFor={positionId}>Position:</Label>
            <Input
              type="text"
              id={positionId}
              value={position}
              onChange={handlePositionChange}
            />
            {positionError && (
              <span style={{ color: "red" }}>{positionErrorMessage}</span>
            )}
          </div>
          <div className={styles.field}>
            <Label htmlFor={salaryId}>Salary:</Label>
            <Input
              type="number"
              id={salaryId}
              value={salary}
              onChange={handleSalaryChange}
            />
            {salaryError && (
              <span style={{ color: "red" }}>{salaryErrorMessage}</span>
            )}
          </div>
          <Grid container>
            <Grid item xs={12}>
              <Button
                appearance="primary"
                type="submit"
                style={{ width: "100%" }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: auto;
  width: 60%;
`;
