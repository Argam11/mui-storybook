import React from "react";
import PropTypes from "prop-types";
import MUITypography from "@mui/material/Typography";

export const Typography = ({ children, ...props }) => {
  return <MUITypography {...props}>{children}</MUITypography>;
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
};
