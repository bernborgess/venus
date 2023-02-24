import { createContext } from "react";
import { addArtist } from "./addArtist";
import { addTodo } from "./addTodo";
import { deleteArtist } from "./deleteArtist";
import { getAlbums } from "./getAlbums";
import { getAlbumsOfArtist } from "./getAlbumsOfArtist";
import { getArtist } from "./getArtist";
import { getArtists } from "./getArtists";
import { getTodosOfArtist } from "./getTodosOfArtist";

const apiState = {
  addArtist,
  addTodo,
  deleteArtist,
  getAlbums,
  getAlbumsOfArtist,
  getArtist,
  getArtists,
  getTodosOfArtist
};
const ApiContext = createContext(apiState);

const ApiProvider = ({ children }:
  React.PropsWithChildren) => {

  return <ApiContext.Provider value={apiState}>{children}</ApiContext.Provider>
}

export { ApiContext, ApiProvider };

