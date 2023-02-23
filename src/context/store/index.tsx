import { createContext, useState } from "react";

const DataContext = createContext({});

const DataProvider = ({ children }:
  React.PropsWithChildren) => {
  const [globalSingers, setGlobalSingers] = useState([]);
  const [globalSongs, setGlobalSongs] = useState([]);
  const [globalStudios, setGlobalStudios] = useState([]);

  const dataState = {
    globalSingers,
    globalSongs,
    globalStudios,
    setGlobalSingers,
    setGlobalSongs,
    setGlobalStudios
  };

  return (
    <DataContext.Provider value={dataState}>{children}</DataContext.Provider>
  );
}

export { DataContext, DataProvider };

