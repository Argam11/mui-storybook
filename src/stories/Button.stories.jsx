import React from "react";
import { Button } from "components/Button/Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

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
