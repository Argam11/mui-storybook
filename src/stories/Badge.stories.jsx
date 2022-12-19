import React from "react";
import { Badge } from "components/Badge/Badge";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default {
  title: "Example/Badge",
  component: Badge,
};

const Template = () => {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  return (
    <>
      <Stack spacing={2} direction="row">
        <Badge badgeContent={4} color="error">
          <MailIcon color="secondary" />
        </Badge>
        <Badge badgeContent={55} color="error">
          <ShoppingCartIcon />
        </Badge>
        <Badge color="secondary" badgeContent={100} max={99}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" variant="dot">
          <MailIcon />
        </Badge>
      </Stack>
      <Box sx={{ mt: 2 }}>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup sx={{ ml: 4 }}>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Badge badgeContent={4} color="error" invisible={invisible}>
          <MailIcon />
        </Badge>
        <FormControlLabel
          sx={{ color: "text.primary", ml: 2 }}
          control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
          label="Show Badge"
        />
      </Box>
    </>
  );
};

export const Index = Template.bind({});
