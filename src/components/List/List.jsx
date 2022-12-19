import React from "react";
import MUIList from "@mui/material/List";
import MUIListItem from "@mui/material/ListItem";
import MUIListItemButton from "@mui/material/ListItemButton";
import MUIListItemIcon from "@mui/material/ListItemIcon";
import MUIListItemText from "@mui/material/ListItemText";

export const List = ({ list, ...props }) => {
  return (
    <MUIList {...props}>
      {list.map((item) => {
        return (
          <MUIListItem key={item.id} disablePadding>
            <MUIListItemButton>
              <MUIListItemIcon>
                {item.icon}
              </MUIListItemIcon>
              <MUIListItemText primary={item.text} />
            </MUIListItemButton>
          </MUIListItem>
        );
      })}
    </MUIList>
  );
};
