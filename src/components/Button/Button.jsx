import React from "react";
import PropTypes from "prop-types";
import MUIButton from "@mui/material/Button";

export const Button = ({ label, ...props }) => {
  return <MUIButton {...props}>{label}</MUIButton>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
