import { createContext } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { AllArtists } from "../pages/AllArtists";

const ALL_ARTISTS_ROUTE = "artists";

const RoutingContext = createContext({});

const RoutingProvider = ({ children }:
  React.PropsWithChildren) => {
  const navigate = useNavigate();

  const routingState = {
    navigateToAllArtists: () => navigate(ALL_ARTISTS_ROUTE)
  }

  return (
    <RoutingContext.Provider value={routingState}>
      {children}
    </RoutingContext.Provider>
  );
};

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <RoutingProvider>
        <Routes>
          <Route path="*" element={<NavBar />}>
            <Route
              path={ALL_ARTISTS_ROUTE}
              element={<AllArtists />}
            />
            <Route
              path="*"
              element={<h1 style={{ color: "red" }}>OOPS</h1>}
            />
          </Route>
        </Routes>
      </RoutingProvider>
    </BrowserRouter>
  )
}

export { RoutesProvider, RoutingContext };

