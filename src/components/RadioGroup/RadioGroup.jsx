import React from "react";
import PropTypes from "prop-types";
import MUIFormControl from "@mui/material/FormControl";
import MUIFormLabel from "@mui/material/FormLabel";
import MUIRadioGroup from "@mui/material/RadioGroup";
import MUIFormControlLabel from "@mui/material/FormControlLabel";
import MUIRadio from "@mui/material/Radio";

export const RadioGroup = ({ label, name, options, defaultValue, ...props }) => {
  return (
    <MUIFormControl {...props}>
      <MUIFormLabel>{label}</MUIFormLabel>
      <MUIRadioGroup aria-labelledby="radio-buttons-group-label" defaultValue={defaultValue} name={name} row>
        {options.map((option) => {
          return <MUIFormControlLabel key={option.id} {...option} control={<MUIRadio />} />;
        })}
      </MUIRadioGroup>
    </MUIFormControl>
  );
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

RadioGroup.defaultProps = {
  options: [],
};
