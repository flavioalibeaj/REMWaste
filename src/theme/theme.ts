import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});
