import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const SwapiContext = createContext([]);

export const SwapiProvider = ({ children }) => {
  const [swapi, setSwapi] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSwapi = () => {
    api.get("/").then((res) => {
      setSwapi(res);
      console.log(res);
      setLoading(false);
    });
  };

  return (
    <SwapiContext.Provider value={{ swapi, getSwapi, setSwapi, loading }}>
      {children}
    </SwapiContext.Provider>
  );
};

export const useSwapi = () => useContext(SwapiContext);
