import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePageTitle } from "../context/PageTitleContext";
export default function Header({ onNavToggle }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const pageTitle = usePageTitle();

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="d-flex justify-content-between">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onNavToggle}
          className="navigation-ops"
        >
          <MenuIcon />
        </IconButton>
        <Box className="logo" />
        <Box className="right d-flex align-items-center">
          <IconButton onClick={handleMenu} size="small" sx={{ ml: 2 }}>
            <Avatar alt="Profile" src="/profilepic.jfif" /> {/* same image */}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
        <Typography variant="h6">{pageTitle}</Typography>
      </Toolbar>
    </AppBar>
  );
}
