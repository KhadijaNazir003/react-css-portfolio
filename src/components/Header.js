import React from "react";
import "./Header.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePageTitle } from "../context/PageTitleContext";
import { useColorMode } from "../context/ColorModeContext";
export default function Header({ onNavToggle }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const pageTitle = usePageTitle();
  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar
        className="d-flex justify-content-between width_100"
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onNavToggle}
        >
          <MenuIcon />
        </IconButton>
        <input
          type="checkbox"
          className="theme-checkbox"
          checked={theme.palette.mode === "dark"}
          onChange={colorMode.toggleColorMode}
        />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="width_100"       
        >
          <Typography variant="h6">{pageTitle}</Typography>
        </Grid>
        {/* <Box className="right d-flex align-items-center">
        </Box> */}
        <Grid container justifyContent="space-between">
          <Box className="logo" />
          <IconButton onClick={handleMenu} size="small" sx={{ ml: 2 }}>
            <Avatar alt="Profile" src="/profilepic.jfif" />
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
