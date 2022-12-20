import React from "react";
import { Tooltip } from "components/Tooltip/Tooltip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default {
  title: "Example/Tooltip",
  component: Tooltip,
};

const Template = (args) => {
  return (
    <Stack spacing={2} direction="row" sx={{ mt: 5 }}>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add" placement="left">
        <Button>left</Button>
      </Tooltip>
      <Tooltip title="Add" placement="top">
        <Button>top</Button>
      </Tooltip>
      <Tooltip title="Add" placement="right">
        <Button>right</Button>
      </Tooltip>
      <Tooltip title="Add" placement="bottom">
        <Button>bottom</Button>
      </Tooltip>
      <Tooltip title="Add" arrow>
        <Button>Arrow</Button>
      </Tooltip>
    </Stack>
  );
};

export const Index = Template.bind({});
