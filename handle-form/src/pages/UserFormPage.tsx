import React, { useEffect } from "react";
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

export const UserFormPage = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { getUser, updateUser } = useUsers();

  const [name, handleNameChange, nameError, nameErrorMessage, setName] =
    useForm<string>("");
  const [
    position,
    handlePositionChange,
    positionError,
    positionErrorMessage,
    setPosition,
  ] = useForm<string>("");
  const [
    salary,
    handleSalaryChange,
    salaryError,
    salaryErrorMessage,
    setSalary,
  ] = useForm<number>(0);

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        const fetchedUser = await getUser(id);

        if (fetchedUser) {
          const {
            name: fetchedName,
            position: fetchedPosition,
            salary: fetchedSalary,
          } = fetchedUser;

          setName(fetchedName);
          setPosition(fetchedPosition);
          setSalary(fetchedSalary);
        }
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !position || !salary) {
      ToastError("Error in the form");
    } else {
      if (id) {
        const updatedData: User = {
          name,
          position,
          salary,
        };
        updateUser(id, updatedData);
        navigate("/users");
      }
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
