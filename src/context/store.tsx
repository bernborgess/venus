import { createContext, useState } from "react";

const DataContext = createContext({});

const DataProvider = ({ children }:
  React.PropsWithChildren) => {
  const [globalArtists, setGlobalArtists] = useState([]);
  const [globalAlbums, setGlobalAlbums] = useState([]);
  const [globalTodos, setGlobalTodos] = useState([]);

  const dataState = {
    globalArtists,
    globalAlbums,
    globalTodos,
    setGlobalArtists,
    setGlobalAlbums,
    setGlobalTodos
  };

  return (
    <DataContext.Provider value={dataState}>{children}</DataContext.Provider>
  );
}

export { DataContext, DataProvider };

