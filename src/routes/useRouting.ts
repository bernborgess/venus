import { useContext } from "react";
import { RoutingContext } from ".";

export function useRouting() {
  const context = useContext(RoutingContext);
  if (context === undefined)
    throw new Error("useRouting must be within RoutesProvider");

  return context;
}