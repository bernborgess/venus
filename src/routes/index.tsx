import { createContext, useContext } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { AlbumCreate } from "../pages/Album/AlbumCreate";
import { AllAlbums } from "../pages/Album/AllAlbums";
import { AllArtists } from "../pages/Artist/AllArtists";
import { ArtistCreate } from "../pages/Artist/ArtistCreate";
import { ArtistPosts } from "../pages/Artist/ArtistPosts";
import { ArtistProfile } from "../pages/Artist/ArtistProfile";
import { Feed } from "../pages/Feed";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { PostComments } from "../pages/Post/PostComments";

const ARTISTS_ROUTE = "artists";
const ALBUMS_ROUTE = "albums";
const FEED_ROUTE = "posts";

interface RoutingState {
  navigateToHome: () => void,

  navigateToAllArtists: () => void,
  navigateToArtistCreate: () => void,
  navigateToArtistProfile: (artistId: number) => void,
  navigateToArtistPosts: (artistId: number) => void,

  navigateToAllAlbums: () => void,
  navigateToAlbumCreate: () => void,

  navigateToFeed: () => void,

  navigateToPostComments: (postId: number) => void
}

const RoutingContext = createContext<RoutingState | undefined>(undefined);

const RoutingProvider = ({ children }:
  React.PropsWithChildren) => {
  const navigate = useNavigate();

  const routingState: RoutingState = {
    navigateToHome: () => navigate(""),

    navigateToAllArtists: () => navigate(ARTISTS_ROUTE),
    navigateToArtistCreate: () => navigate(`${ARTISTS_ROUTE} /create`),
    navigateToArtistProfile: (artistId: number) => navigate(`${ARTISTS_ROUTE}/${artistId}`),
    navigateToArtistPosts: (artistId: number) => navigate(`${ARTISTS_ROUTE}/${artistId}/posts`),

    navigateToAllAlbums: () => navigate(ALBUMS_ROUTE),
    navigateToAlbumCreate: () => navigate(`${ALBUMS_ROUTE}/create`),

    navigateToFeed: () => navigate(FEED_ROUTE),
    navigateToPostComments: (postId: number) => navigate(`${FEED_ROUTE}/${postId}/comments`)
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
              index
              element={<Home />}
            />

            <Route
              path={ARTISTS_ROUTE}
              element={<AllArtists />}
            />
            <Route
              path={`${ARTISTS_ROUTE}/create`}
              element={<ArtistCreate />}
            />
            <Route
              path={`${ARTISTS_ROUTE}/:id`}
              element={<ArtistProfile />}
            />
            <Route
              path={`${ARTISTS_ROUTE}/:id/posts`}
              element={<ArtistPosts />}
            />

            <Route
              path={ALBUMS_ROUTE}
              element={<AllAlbums />}
            />
            <Route
              path={`${ALBUMS_ROUTE}/create`}
              element={<AlbumCreate />}
            />

            <Route
              path={FEED_ROUTE}
              element={<Feed />}
            />

            <Route
              path={`${FEED_ROUTE}/:id/comments`}
              element={<PostComments />}
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
  if (context === undefined)
    throw new Error("useRouting must be within RoutesProvider");

  return context;
}

export { RoutesProvider, useRouting };

