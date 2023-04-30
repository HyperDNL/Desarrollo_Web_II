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
import { useParams, useNavigate } from "react-router-dom";
import { DividerSection } from "../components/DividerSection";
import useForm from "../hooks/useForm";
import { Toast } from "../components/Toast";
import { users } from "../resources/UsersData";

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

export const UserFormPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const user = users.find(({ userId }) => userId === Number(id));

  const [name, handleNameChange, nameError, nameErrorMessage] = useForm<string>(
    user?.name
  );
  const [position, handlePositionChange, positionError, positionErrorMessage] =
    useForm<string>(user?.position);
  const [salary, handleSalaryChange, salaryError, salaryErrorMessage] =
    useForm<number>(user?.salary);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameError || positionError || salaryError) {
      Toast("Error in the form.");
    } else {
      console.log(
        `Nombre: ${name}, Position: ${position}, Type of Salary: ${typeof salary}, Salary: ${salary}`
      );
      navigate("/users");
    }
  };

  const nameId = useId("name");
  const positionId = useId("position");
  const salaryId = useId("salary");
  const styles = useStyles();

  return (
    <>
      <DividerSection text="Update User" />
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                appearance="secondary"
                onClick={() => navigate("/users")}
                style={{ width: "100%" }}
              >
                Go to Users
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                appearance="primary"
                type="submit"
                style={{ width: "100%" }}
              >
                Update
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
