import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const SwapiContext = createContext([]);

export const SwapiProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSwapi = () => {
    api.get(`people/?page=1`).then((res) => {
      setPeople(res);
      setLoading(false);
    });

    api.get(`films`).then((res) => {
      setFilms(res);
      console.log(res);
      setLoading(false);
    });
  };

  return (
    <SwapiContext.Provider
      value={{
        people,
        setPeople,
        films,
        setFilms,
        loading,
        setLoading,
        getSwapi,
      }}
    >
      {children}
    </SwapiContext.Provider>
  );
};

export const useSwapi = () => useContext(SwapiContext);
