import React from "react";
import { Typography } from "components/Typography/Typography";
import Stack from "@mui/material/Stack";

export default {
  title: "Example/Typography",
  component: Typography,
};

const Template = (args) => {
  return (
    <Stack spacing={2}>
      <Typography {...args} variant="h1">h1 Heading</Typography>
      <Typography {...args} variant="h2">h2 Heading</Typography>
      <Typography {...args} variant="h3">h3 Heading</Typography>
      <Typography {...args} variant="h4">h4 Heading</Typography>
      <Typography {...args} variant="h5">h5 Heading</Typography>
      <Typography {...args} variant="h6">h6 Heading</Typography>

      <Typography {...args} variant="subtitle1">Sub title 1</Typography>
      <Typography {...args} variant="subtitle2">Sub title 2</Typography> 

      <Typography {...args} variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex quis deleniti inventore odit similique ducimus, ipsum consequatur
        eveniet saepe accusamus eos, veniam eum quibusdam aspernatur unde voluptatum odio fugiat?
      </Typography>
      <Typography {...args} variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi facilis praesentium, vitae natus est at fugiat explicabo vero ipsam
        necessitatibus illo autem aut molestias! Nam cumque reprehenderit voluptates dicta!
      </Typography>
    </Stack>
  );
};

export const Index = Template.bind({});
