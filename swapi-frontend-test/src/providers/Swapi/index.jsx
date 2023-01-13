import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const SwapiContext = createContext([]);

export const SwapiProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  const [filteredPeople, setFilteredPeople] = useState([]);
  const [filterIsOn, setFilterIsOn] = useState(false);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingFilms, setLoadingFilms] = useState(true);
  const [nextPage, setNextPage] = useState("");

  async function getPeople() {
    await api.get(`people/?page=1`).then((res) => {
      setPeople(res.data.results);
      setNextPage(res.data.next);
      setLoading(false);
    });
  }

  async function getFilms() {
    setLoadingFilms(true);
    await api
      .get(`films/`)
      .then((res) => {
        setFilms(res.data.results);
        setLoadingFilms(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <SwapiContext.Provider
      value={{
        people,
        setPeople,
        filteredPeople,
        setFilteredPeople,
        filterIsOn,
        setFilterIsOn,
        nextPage,
        setNextPage,
        films,
        setFilms,
        loading,
        setLoading,
        loadingFilms,
        setLoadingFilms,
        getPeople,
        getFilms,
      }}
    >
      {children}
    </SwapiContext.Provider>
  );
};

export const useSwapi = () => useContext(SwapiContext);
