import React from "react";
import { TextField } from "components/TextField/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";

export default {
  title: "Example/TextField",
  component: TextField,
};

const Template = (args) => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField {...args} label="Outlined" variant="outlined" />
        <TextField {...args} label="Filled" variant="filled" />
        <TextField {...args} label="Standard" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField {...args} label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField {...args} label="Form input" required />
        <TextField {...args} type="password" label="Password" helperText="Don't share your password with anyone" />
        <TextField {...args} type="password" label="Password" helperText="Don't share your password with anyone" error />
        <TextField {...args} type="password" label="Password" disabled />
        <TextField {...args} label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          {...args}
          type="number"
          label="Amount"
          InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
        />
        <TextField
          {...args}
          type="number"
          label="Weight"
          InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }}
        />
      </Stack>
      <Stack spacing={2} direction="row" width={250}>
        <TextField
          {...args}
          select
          fullWidth
          label="Slect country"
          size="small"
          color="secondary"
          helperText="Please select your counrty"
          error
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Stack>
    </Stack>
  );
};

export const Index = Template.bind({});
