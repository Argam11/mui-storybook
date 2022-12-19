import React from "react";
import { List } from "components/List/List";
import Stack from "@mui/material/Stack";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default {
  title: "Example/List",
  component: List,
};

const list1 = [
  { id: 1, text: "Inbox", icon: <InboxIcon /> },
  { id: 2, text: "Drafts", icon: <DraftsIcon /> },
];

const Template = () => {
  return (
    <Stack spacing={2} direction="row" bgcolor="rgb(231, 235, 240)">
      <List list={list1} />
    </Stack>
  );
};

export const Index = Template.bind({});
