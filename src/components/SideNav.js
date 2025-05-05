// src/components/SideNav.js
import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

export default function SideNav({ open, onClose }) {
  const navItems = [
    { text: "Home", to: "/" },
    { text: "Projects", to: "/projects" },
    { text: "Education", to: "/education" },
    { text: "Contact", to: "/contact" },
  ];

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      className="left-side"
      classes={{ paper: "left-side" }}
    >
      <IconButton onClick={onClose} className="close-btn">
        <ChevronLeftIcon />
      </IconButton>
      <List className="nav-list">
        {navItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.to}
            onClick={onClose}
            className="nav-item"
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
