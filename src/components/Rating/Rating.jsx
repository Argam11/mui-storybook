import React from "react";
import Box from "@mui/material/Box";
import MUIRating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export const Rating = ({ defaultChecked, ...props }) => {
  return (
    <Box>
      <Typography component="legend">Read only</Typography>
      <MUIRating name="read-only" value={2} readOnly />
    </Box>
  );
};
