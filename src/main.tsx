/* eslint-disable react/jsx-key */
import React from "react";
import ReactDOM from "react-dom/client";
import { NotificationProvider } from "./context/notification";
import "./index.css";
import { RoutesProvider } from "./routes/RoutesProvider";
import { ApiProvider } from "./services";



ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement)
  .render(
    [
      <React.StrictMode />,
      <ApiProvider />,
      <NotificationProvider />,
      <RoutesProvider />
    ].reduceRight((prev, comp) =>
      React.cloneElement(comp, {}, prev)
    ),
  );