
import { ptBR } from "@mui/material/locale";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export const ThemeProvider = ({ children }:
  React.PropsWithChildren) => {

  const theme =
    createTheme({
      palette: {
        primary: {
          main: "#393184"
        },
        secondary: {
          main: "#00838f"
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 900,
          md: 900,
          lg: 1200,
          xl: 1536
        }
      }
    }, ptBR
    );

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};


