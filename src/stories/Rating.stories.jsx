import React from "react";
import { Rating } from "components/Rating/Rating";
import { Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default {
  title: "Example/Rating",
  component: Rating,
};

const Template = () => {
  return (
    <Stack>
      <Rating value={2} label="Simple" />
      <Rating value={4} label="Read only" />
      <Rating value={4} label="Read only" disabled />
      <Rating value={4} label="Read only" disabled />
      <Rating
        defaultValue={2}
        label="Default Value"
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#ff6d75",
          },
          "& .MuiRating-iconHover": {
            color: "#ff3d47",
          },
        }}
      />
      <Rating defaultValue={5} label="Default Value" max={10} />
    </Stack>
  );
};

export const Index = Template.bind({});
