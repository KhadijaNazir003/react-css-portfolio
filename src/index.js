import React from "react";
import "./index.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./styles/portfolio.css"; 
import "./styles/left_side.css";
import "./styles/right_side.css";

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
