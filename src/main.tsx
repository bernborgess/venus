import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./constants/theme";
import { DataProvider } from "./context/store";
import "./index.css";
import { RoutesProvider } from "./routes";
import { ApiProvider } from "./services";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement)
  .render(
    <React.StrictMode>
      <ThemeProvider
        theme={theme}
      >
        <ApiProvider>
          <DataProvider>
            <RoutesProvider />
          </DataProvider>
        </ApiProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
