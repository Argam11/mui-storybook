import React from "react";
import { Rating } from "components/Rating/Rating";
import { Stack } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default {
  title: "Example/Rating",
  component: Rating,
};

const Template = () => {
  return (
    <Stack direction="row">
      <Rating />
    </Stack>
  );
};

export const Index = Template.bind({});
