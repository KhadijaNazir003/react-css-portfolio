import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./styles/portfolio.css"; // formerly portfolio.css
import "./styles/left_side.css";
import "./styles/right_side.css";
import "./styles/dark_portfolio.css"; // will override via .theme-checkbox
import "./styles/dark_left_side.css";
import "./styles/dark_right_side.css";

import App from "./App";
import theme from "./theme/theme";
import { ColorModeProvider } from "./context/ColorModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider> */}
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
