import React from "react";
import { Avatar } from "components/Avatar/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from '@mui/material/colors';
import img1 from "assets/1.jpg";
import img2 from "assets/2.jpg";
import img3 from "assets/3.jpg";

export default {
  title: "Example/Avatar",
  component: Avatar,
};

const Template = (args) => {
  return (
    <Stack spacing={2} direction="row">
      <Avatar alt="Remy Sharp" src={img1} />
      <Avatar alt="Remy Sharp" src={img2} />
      <Avatar alt="Remy Sharp" src={img3} />
      <Avatar alt="Remy Sharp" />
      <Avatar alt="Remy Sharp" src="unknown" sx={{ bgcolor: deepOrange[500] }} />
      <Avatar alt="Ann Sharp" src="unknown" />
      <Avatar>H</Avatar>
    </Stack>
  );
};

export const Index = Template.bind({});
