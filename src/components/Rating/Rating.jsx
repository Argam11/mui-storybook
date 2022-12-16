import React from "react";
import Box from "@mui/material/Box";
import MUIRating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export const Rating = ({ label, ...props }) => {
  return (
    <Box>
      <Typography component="legend">{label}</Typography>
      <MUIRating {...props} />
    </Box>
  );
};
