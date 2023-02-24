import { createContext, useContext } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { AllAlbums } from "../pages/AllAlbums";
import { AllArtists } from "../pages/AllArtists";
import { ArtistProfile } from "../pages/ArtistProfile";
import { NotFound } from "../pages/NotFound";

const ARTISTS_ROUTE = "artists";
const ALBUMS_ROUTE = "albums";

interface RoutingState {
  navigateToAllArtists: () => void,
  navigateToArtistProfile: (artistId: number) => void,
  navigateToAllAlbums: () => void,
}

const RoutingContext = createContext<RoutingState | undefined>(undefined);

const RoutingProvider = ({ children }:
  React.PropsWithChildren) => {
  const navigate = useNavigate();

  const routingState: RoutingState = {
    navigateToAllArtists: () => navigate(ARTISTS_ROUTE),
    navigateToAllAlbums: () => navigate(ALBUMS_ROUTE),
    navigateToArtistProfile: (artistId: number) => navigate(`${ARTISTS_ROUTE}/${artistId}`)
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
              path={ARTISTS_ROUTE}
              element={<AllArtists />}
            />
            <Route
              path={`${ARTISTS_ROUTE}/:id`}
              element={<ArtistProfile />}
            />
            <Route
              path={ALBUMS_ROUTE}
              element={<AllAlbums />}
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

function useRouting() {
  const context = useContext(RoutingContext);
  if (context === undefined) {
    throw new Error("useRouting must be within RoutesProvider");
  }
  return context;
}

export { RoutesProvider, useRouting };

