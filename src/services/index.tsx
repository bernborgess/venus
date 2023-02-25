import { createContext, useContext } from "react";
import { addArtist } from "./addArtist";
import { addTodo } from "./addTodo";
import { addAlbum } from "./Album/addAlbum";
import { getAlbums } from "./Album/getAlbums";
import { deleteArtist } from "./deleteArtist";
import { getAlbumsOfArtist } from "./getAlbumsOfArtist";
import { getArtist } from "./getArtist";
import { getArtistPosts } from "./getArtistPosts";
import { getArtists } from "./getArtists";
import { getPostComments } from "./getPostComments";
import { getPosts } from "./getPosts";
import { getTodosOfArtist } from "./getTodosOfArtist";

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

  getAlbumsOfArtist,
  getTodosOfArtist,
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

