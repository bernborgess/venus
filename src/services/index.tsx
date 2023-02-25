import { createContext, useContext } from "react";

import { addAlbum } from "./Album/addAlbum";
import { getAlbums } from "./Album/getAlbums";

import { addArtist } from "./Artist/addArtist";
import { deleteArtist } from "./Artist/deleteArtist";
import { getArtist } from "./Artist/getArtist";
import { getArtistPosts } from "./Artist/getArtistPosts";
import { getArtists } from "./Artist/getArtists";

import { getArtistAlbums } from "./Artist/getArtistAlbums";
import { getArtistTodos } from "./Artist/getArtistTodos";
import { getPostComments } from "./Post/getPostComments";
import { getPosts } from "./Post/getPosts";
import { addTodo } from "./Todo/addTodo";

const apiState = {
  getArtists,
  addArtist,
  getArtist,
  deleteArtist,

  getArtistPosts,

  getAlbums,
  addAlbum,

  getPosts,

  getPostComments,

  getArtistAlbums,
  getArtistTodos,
  addTodo,
};

const ApiContext = createContext(apiState);

const ApiProvider = ({ children }:
  React.PropsWithChildren) => {

  return (
    <ApiContext.Provider value={apiState}>
      {children}
    </ApiContext.Provider>
  );
};

const useApi = () => useContext(ApiContext);

export { useApi, ApiProvider };

