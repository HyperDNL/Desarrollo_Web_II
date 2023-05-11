import React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellActions,
  TableCellLayout,
  Button,
  Text,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";
import {
  EditRegular,
  EditFilled,
  bundleIcon,
  DeleteFilled,
  DeleteRegular,
} from "@fluentui/react-icons";
import { Grid } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/usersContext";

const EditIcon = bundleIcon(EditFilled, EditRegular);
const DeleteIcon = bundleIcon(DeleteFilled, DeleteRegular);

const useStyles = makeStyles({
  root: {
    backgroundColor: "#E23736",
    color: "white",
    "&:hover": {
      backgroundColor: "#F23D3D",
      color: "white",
    },
  },
  container: {
    ...shorthands.gap("16px"),
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
});

const columns = [
  { columnKey: "id", label: "ID" },
  { columnKey: "name", label: "Name" },
  { columnKey: "position", label: "Position" },
  { columnKey: "salary", label: "Salary" },
];

const TableActions = () => {
  const navigate = useNavigate();
  const { users, deleteUser } = useUsers();

  const classes = useStyles();

  const handleDelete = (id: string) => {
    toast((t) => (
      <div className={classes.container}>
        <Text align="center" size={400}>
          Do you want to delete?
        </Text>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              className={classes.root}
              onClick={() => {
                deleteUser(id);
                navigate("/users");
                toast.dismiss(t.id);
              }}
              style={{ width: "100%" }}
            >
              Delete
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              appearance="secondary"
              type="submit"
              style={{ width: "100%" }}
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    ));
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map(({ columnKey, label }) => (
            <TableHeaderCell key={columnKey}>{label}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(({ id, name, position, salary }) => (
          <TableRow key={id}>
            <TableCell>
              <TableCellLayout>{id}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>{name}</TableCellLayout>
            </TableCell>
            <TableCell>{position}</TableCell>
            <TableCell>
              <TableCellLayout>$ {salary}</TableCellLayout>
              <TableCellActions>
                <Button
                  icon={<EditIcon />}
                  appearance="subtle"
                  onClick={() => navigate(`/user-form/${id}`)}
                />
                <Button
                  icon={<DeleteIcon />}
                  appearance="subtle"
                  onClick={() => {
                    if (id) {
                      handleDelete(id);
                    }
                  }}
                />
              </TableCellActions>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableActions;
