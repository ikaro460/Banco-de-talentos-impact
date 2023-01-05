import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const SwapiContext = createContext([]);

export const SwapiProvider = ({ children }) => {
  const [swapi, setSwapi] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSwapi = () => {
    api.get(`people/?page=1`).then((res) => {
      setSwapi(res);
      setLoading(false);
    });
  };

  return (
    <SwapiContext.Provider
      value={{ swapi, getSwapi, setSwapi, loading, setLoading }}
    >
      {children}
    </SwapiContext.Provider>
  );
};

export const useSwapi = () => useContext(SwapiContext);
