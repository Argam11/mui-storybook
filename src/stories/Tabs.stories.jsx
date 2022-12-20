import React from "react";
import { Tabs } from "components/Tabs/Tabs";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";

export default {
  title: "Example/Tabs",
  component: Tabs,
};

const options = [
  { id: 1, label: "Item One" },
  { id: 2, label: "Item Two" },
  { id: 3, label: "Item Three" },
];

const Template = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2} direction="row">
      <Tabs
        aria-label="basic tabs example"
        options={options}
        value={value}
        onChange={handleChange}
      />
    </Stack>
  );
};

export const Index = Template.bind({});
