import React from "react";
import PropTypes from "prop-types";
import MUIButton from "@mui/material/Button";

export const Button = ({ label, variant, onClick, ...props }) => {
  return (
    <MUIButton variant={variant} onClick={onClick} {...props}>
      {label}
    </MUIButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "contained",
  onClick: () => {},
};
