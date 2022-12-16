import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MUICheckbox from "@mui/material/Checkbox";

export const Checkbox = ({ checkboxProps, labelProps }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<MUICheckbox {...checkboxProps} />} {...labelProps} />
    </FormGroup>
  );
};
