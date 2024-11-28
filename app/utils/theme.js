// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize as needed
    },
    secondary: {
      main: "#9c27b0", // Customize as needed
    },
  },
  typography: {
    fontFamily: "Josefin Sans, Arial, sans-serif",
  },
});

export default theme;
