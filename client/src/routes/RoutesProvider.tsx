import { useState } from "react";
import {
  BrowserRouter, Route,
  Routes,
  useNavigate
} from "react-router-dom";

import { RoutingContext, RoutingState } from ".";
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

const BASE_PATH = "venus";
const ARTISTS_ROUTE = "artists";
const ALBUMS_ROUTE = "albums";
const FEED_ROUTE = "posts";

const RoutingProvider = ({ children }:
  React.PropsWithChildren) => {
  const navigate_raw = useNavigate();
  const [routeTitle, setRouteTitle] = useState("");
  const navigateFn = (route: string, title: string) => {
    setRouteTitle(title);
    navigate_raw(`${BASE_PATH}/${route}`);
  };



  const routingState: RoutingState = {
    routeTitle,

    navigateToHome: () => navigateFn("", "Home"),

    navigateToAllArtists: () => navigateFn(ARTISTS_ROUTE, "All Artists"),


    navigateToArtistCreate: () => navigateFn(`${ARTISTS_ROUTE}/create`, "Create Artist"),
    navigateToArtistProfile: (artistId: number) =>
      navigateFn(`${ARTISTS_ROUTE}/${artistId}`, "Artist Profile"),
    navigateToArtistPosts: (artistId: number) =>
      navigateFn(`${ARTISTS_ROUTE}/${artistId}/posts`, "Artist's Posts"),

    navigateToAllAlbums: () => navigateFn(ALBUMS_ROUTE, "All Albums"),
    navigateToAlbumCreate: () => navigateFn(`${ALBUMS_ROUTE}/create`, "Create Album"),

    navigateToFeed: () => navigateFn(FEED_ROUTE, "Feed"),
    navigateToPostComments: (postId: number) =>
      navigateFn(`${FEED_ROUTE}/${postId}/comments`, "Post's Comments"),

    navigateBack: () => navigate_raw(-1)
  };

  return (
    <RoutingContext.Provider value={routingState}>
      {children}
    </RoutingContext.Provider>
  );
};

export const RoutesProvider = () => {

  return (
    <BrowserRouter>
      <RoutingProvider>
        <Routes>
          <Route path={BASE_PATH} element={<NavBar />}>

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

