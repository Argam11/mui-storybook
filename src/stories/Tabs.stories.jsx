import React from "react";
import { Tabs } from "components/Tabs/Tabs";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";

export default {
  title: "Example/Tabs",
  component: Tabs,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Template = (args) => {
  return (
    <Stack spacing={2} direction="row">
      <Tabs aria-label="basic tabs example">
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
    </Stack>
  );
};

export const Index = Template.bind({});
