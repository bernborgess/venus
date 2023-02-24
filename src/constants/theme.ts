
import { red } from "@mui/material/colors";
import { ptBR } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "'Inter', sans-serif"
  },
}, ptBR
);

