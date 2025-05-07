import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1F9CDA" },
    secondary: { main: "#EA6B6B" },
    mode: "light", 
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiAppBar: { defaultProps: { elevation: 3 } },
  },
});

export default theme;
