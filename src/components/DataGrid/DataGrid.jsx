import React from "react";
import { DataGrid as MUIDataGrid } from "@mui/x-data-grid";

export const DataGrid = ({ columns, rows, ...props }) => {
  return (
    <MUIDataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
      {...props}
    />
  );
};
