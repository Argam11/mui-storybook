import React from "react";
import MUIPaper from "@mui/material/Paper";
import MUITable from "@mui/material/Table";
import MUITableContainer from "@mui/material/TableContainer";
import MUITableHead from "@mui/material/TableHead";
import MUITableBody from "@mui/material/TableBody";
import MUITableRow from "@mui/material/TableRow";
import MUITableCell from "@mui/material/TableCell";

export const Table = ({ columns, rows, ...props }) => {
  return (
    <MUITableContainer component={MUIPaper} {...props}>
      <MUITable sx={{ minWidth: 650 }} aria-label="simple table">
        <MUITableHead>
          <MUITableRow>
            {columns.map((column) => {
              return <MUITableCell key={column.field}>{column.headerName}</MUITableCell>;
            })}
          </MUITableRow>
        </MUITableHead>
        <MUITableBody>
          {rows.map((row) => (
            <MUITableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {columns.map((column) => {
                return (
                  <MUITableCell key={column.field}>
                    {row[column.field] || column.valueGetter(row)}
                  </MUITableCell>
                );
              })}
            </MUITableRow>
          ))}
        </MUITableBody>
      </MUITable>
    </MUITableContainer>
  );
};
