import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from "./context/store";
import "./index.css";
import { RoutesProvider } from "./routes";
import { ApiProvider } from "./services";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement)
  .render(
    <React.StrictMode>
      <ApiProvider>
        <DataProvider>
          <RoutesProvider />
        </DataProvider>
      </ApiProvider>
    </React.StrictMode>,
  );
