import React, { useEffect } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link, useLocation } from "react-router-dom";

export default function SideNav({ open, onClose }) {
  const navItems = [
    { text: "Home", to: "/" },
    { text: "Projects", to: "/projects" },
    { text: "Education", to: "/education" },
    { text: "Contact", to: "/contact" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  // Close the drawer when the route changes (e.g., clicking a link)
  useEffect(() => {
    if (isMobile && open) {
      onClose();
    }
  }, [location.pathname]);

  return (
    <Drawer
      variant={"temporary"}
      open={open}
      onClose={onClose} // ⬅️ This is all you need for backdrop click to work
      className="left-side"
      classes={{ paper: "left-side" }}
      ModalProps={{ keepMounted: true }}
    >
      {!isMobile && (
        <IconButton onClick={onClose} className="close-btn">
          <ChevronLeftIcon />
        </IconButton>
      )}
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
