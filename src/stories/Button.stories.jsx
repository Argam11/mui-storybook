import React from "react";
import { Button } from "components/Button/Button";
import Stack from "@mui/material/Stack";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Button {...args} size="small" />
      <Button {...args} size="medium" />
      <Button {...args} size="large" />
    </Stack>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "outlined",
  label: "Button",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  label: "Button",
};
