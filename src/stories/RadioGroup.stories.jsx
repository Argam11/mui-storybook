import React from "react";
import { RadioGroup } from "components/RadioGroup/RadioGroup";

export default {
  title: "Example/RadioGroup",
  component: RadioGroup,
};

const options = [
  { id: 1, label: "France", value: "France" },
  { id: 2, label: "England", value: "England" },
  { id: 3, label: "Australia", value: "Australia" },
];

const Template = (args) => {
  return <RadioGroup {...args} label="Select country" name="demo-radio-group" options={options} defaultValue="France" />;
};

export const Index = Template.bind({});
