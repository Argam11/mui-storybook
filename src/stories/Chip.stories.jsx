import React from "react";
import { Chip } from "components/Chip/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import FaceIcon from '@mui/icons-material/Face';

export default {
  title: "Example/Chip",
  component: Chip,
};

const Template = () => {
  const handleClick = (e) => {
    console.log("e", e);
  };
  return (
    <Stack spacing={2} direction="row">
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
      <Chip label="Clickable" onClick={handleClick} />
      <Chip label="Deletable" onDelete={handleClick} />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleClick}
        deleteIcon={<DeleteIcon />}
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Avatar"
        variant="outlined"
      />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
      <Chip label="success" color="success" variant="outlined" />
    </Stack>
  );
};

export const Index = Template.bind({});
