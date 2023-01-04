import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const SwapiContext = createContext([]);

export const SwapiProvider = ({ children }) => {
  const [swapi, setSwapi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getSwapi = () => {
    api.get(`people/?page=${page}`).then((res) => {
      setSwapi(res);
      setLoading(false);
    });
  };

  return (
    <SwapiContext.Provider
      value={{ swapi, getSwapi, setSwapi, loading, setLoading, page, setPage }}
    >
      {children}
    </SwapiContext.Provider>
  );
};

export const useSwapi = () => useContext(SwapiContext);
