import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const SwapiContext = createContext([]);

export const SwapiProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState("");

  async function getPeople() {
    await api.get(`people/?page=1`).then((res) => {
      setPeople(res.data.results);
      setNextPage(res.data.next);
      setLoading(false);
    });
  }

  async function getFilms() {
    await api.get(`films`).then((res) => {
      setFilms([...films, ...res.data.results]);
      setLoading(false);
    });
  }

  return (
    <SwapiContext.Provider
      value={{
        people,
        setPeople,
        nextPage,
        setNextPage,
        films,
        setFilms,
        loading,
        setLoading,
        getPeople,
        getFilms,
      }}
    >
      {children}
    </SwapiContext.Provider>
  );
};

export const useSwapi = () => useContext(SwapiContext);
