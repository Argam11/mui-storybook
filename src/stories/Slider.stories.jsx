import React from "react";
import { Slider } from "components/Slider/Slider";
import { Stack } from "@mui/material";
import { styled } from '@mui/material/styles';

export default {
  title: "Example/Slider",
  component: Slider,
};

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const Template = () => {
  const [value, setValue] = React.useState([20, 37]);
  return (
    <Stack>
      <Slider defaultValue={30} />
      <Slider defaultValue={20} disabled />
      <Slider defaultValue={70} size="small" valueLabelDisplay="auto" />
      <Slider defaultValue={50} valueLabelDisplay="auto" />
      <Slider defaultValue={30} step={10} marks min={10} max={110} valueLabelDisplay="auto" />
      <Slider value={value} onChange={(_Event, newValue) => setValue(newValue)} valueLabelDisplay="auto" />
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={60} />
    </Stack>
  );
};

export const Index = Template.bind({});
