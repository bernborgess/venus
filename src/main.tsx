import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./constants/theme";
import { NotificationProvider } from "./context/notification";
import { DataProvider } from "./context/store";
import "./index.css";
import { RoutesProvider } from "./routes/RoutesProvider";
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
            <NotificationProvider>
              <RoutesProvider />
            </NotificationProvider>
          </DataProvider>
        </ApiProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
