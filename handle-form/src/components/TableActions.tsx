import * as React from "react";
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
} from "@fluentui/react-components";
import { EditRegular, EditFilled, bundleIcon } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import { users } from "../resources/UsersData";

const EditIcon = bundleIcon(EditFilled, EditRegular);

const items = users;

const columns = [
  { columnKey: "id", label: "ID" },
  { columnKey: "name", label: "Name" },
  { columnKey: "position", label: "Position" },
  { columnKey: "salary", label: "Salary" },
];

const TableActions = () => {
  const navigate = useNavigate();

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
        {items.map(({ userId, name, position, salary }) => (
          <TableRow key={userId}>
            <TableCell>
              <TableCellLayout>{userId}</TableCellLayout>
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
                  onClick={() => navigate(`/user-form/${userId}`)}
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
