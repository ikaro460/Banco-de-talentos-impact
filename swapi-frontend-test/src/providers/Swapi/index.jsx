import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

const SwapiContext = createContext([]);

export const SwapiProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [species, setSpecies] = useState([]);
  const [films, setFilms] = useState([]);

  const [filteredPeople, setFilteredPeople] = useState([]);
  const [filterIsOn, setFilterIsOn] = useState(false);

  const [loading, setLoading] = useState(true);

  const [loadingFilms, setLoadingFilms] = useState(true);
  const [nextPage, setNextPage] = useState("");

  async function getPeople() {
    let aux = [];
    for (let i = 1; i < 10; i++) {
      await api.get(`people/?page=${i}`).then((res) => {
        aux.push(...res.data.results);
      });
    }
    setPeople(aux);
    localStorage.setItem("people", JSON.stringify(aux));
  }

  async function getSpecies() {
    let aux = [];
    for (let i = 1; i < 5; i++) {
      await api.get(`species/?page=${i}`).then((res) => {
        aux.push(...res.data.results);
      });
    }
    setSpecies(aux);
    localStorage.setItem("species", JSON.stringify(aux));
  }

  async function getFilms() {
    setLoadingFilms(true);
    await api
      .get(`films/`)
      .then((res) => {
        setFilms(res.data.results);
        localStorage.setItem("films", JSON.stringify(res.data.results));
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
        getPeople,
        species,
        setSpecies,
        getSpecies,
        films,
        setFilms,
        getFilms,
        filteredPeople,
        setFilteredPeople,
        filterIsOn,
        setFilterIsOn,
        nextPage,
        setNextPage,
        loading,
        setLoading,
        loadingFilms,
        setLoadingFilms,
      }}
    >
      {children}
    </SwapiContext.Provider>
  );
};

export const useSwapi = () => useContext(SwapiContext);
