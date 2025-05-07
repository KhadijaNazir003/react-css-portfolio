import React, { createContext, useState, useMemo, useContext } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useTheme,
} from "@mui/material";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: "#1F9CDA" },
          secondary: { main: "#EA6B6B" },
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  return useContext(ColorModeContext);
}
