import React from "react";
import { Checkbox } from "components/Checkbox/Checkbox";
import { Stack } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
};

const Template = () => {
  return (
    <Stack direction="row">
      <Checkbox labelProps={{ label: "Default Checked" }} checkboxProps={{ defaultChecked: true }} />
      <Checkbox labelProps={{ label: "Simple" }} />
      <Checkbox labelProps={{ label: "Disabled" }} checkboxProps={{ disabled: true }} />
      <Checkbox
        labelProps={{ label: "Disabled Checked" }}
        checkboxProps={{ disabled: true, checked: true }}
      />
      <Checkbox
        labelProps={{ label: "Bookmark" }}
        checkboxProps={{ icon: <BookmarkBorderIcon />, checkedIcon: <BookmarkIcon />, color: "success" }}
      />
      <Checkbox
        labelProps={{ label: "Favorite" }}
        checkboxProps={{ icon: <FavoriteBorder />, checkedIcon: <Favorite />, color: "error" }}
      />
    </Stack>
  );
};

export const Index = Template.bind({});
