import { createContext } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { AllArtists } from "../pages/AllArtists";
import { ArtistProfile } from "../pages/ArtistProfile";
import { NotFound } from "../pages/NotFound";

const ALL_ARTISTS_ROUTE = "artists";

const RoutingContext = createContext({});

const RoutingProvider = ({ children }:
  React.PropsWithChildren) => {
  const navigate = useNavigate();


  const routingState = {
    navigateToAllArtists: () => navigate(ALL_ARTISTS_ROUTE)
  };

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
              path="artists"
              element={<AllArtists />}
            />
            <Route
              path="artists/:id"
              element={<ArtistProfile />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </RoutingProvider>
    </BrowserRouter>
  );
};

export { RoutesProvider, RoutingContext };

