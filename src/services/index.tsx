import { createContext, useContext } from "react";
import { addAlbum } from "./addAlbum";
import { addArtist } from "./addArtist";
import { addTodo } from "./addTodo";
import { deleteArtist } from "./deleteArtist";
import { getAlbums } from "./getAlbums";
import { getAlbumsOfArtist } from "./getAlbumsOfArtist";
import { getArtist } from "./getArtist";
import { getArtists } from "./getArtists";
import { getPosts } from "./getPosts";
import { getTodosOfArtist } from "./getTodosOfArtist";

const apiState = {
  getArtists,
  addArtist,
  getArtist,
  deleteArtist,

  getAlbums,
  addAlbum,

  getPosts,

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

