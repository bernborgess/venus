import { createContext } from "react";
import { addArtist } from "../services/addArtist";
import { addTodo } from "../services/addTodo";
import { deleteArtist } from "../services/deleteArtist";
import { getAlbums } from "../services/getAlbums";
import { getAlbumsOfArtist } from "../services/getAlbumsOfArtist";
import { getArtist } from "../services/getArtist";
import { getArtists } from "../services/getArtists";
import { getTodosOfArtist } from "../services/getTodosOfArtist";

const ApiContext = createContext({});

const ApiProvider = ({ children }:
  React.PropsWithChildren) => {
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

  return <ApiContext.Provider value={apiState}>{children}</ApiContext.Provider>
}

export { ApiContext, ApiProvider };
