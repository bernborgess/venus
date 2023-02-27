
import { CssBaseline } from "@mui/material";
import { ptBR } from "@mui/material/locale";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

interface ColorModeState {
  toggleColorMode: () => void
}

export const ColorModeContext =
  createContext<ColorModeState | undefined>(undefined);

export const ThemeProvider = ({ children }:
  React.PropsWithChildren) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
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
      }, ptBR),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};


