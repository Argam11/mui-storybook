import React from "react";
import MUITabs from "@mui/material/Tabs";
import MUITab from "@mui/material/Tab";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Tabs = ({ options, ...props }) => {
  return (
    <MUITabs {...props}>
      {options.map((item) => {
        return <MUITab key={item.id} {...a11yProps(item.id)} {...item} />;
      })}
    </MUITabs>
  );
};
