import axios from "axios";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { CharCard } from "../CharCard";

export const CharacterList = () => {
  const {
    setPeople,
    species,
    films,
    loading,
    setLoading,
    getPeople,
    nextPage,
    setNextPage,
    filterIsOn,
    setFilterIsOn,
    filteredPeople,
  } = useSwapi();

  const { pathname } = useLocation();
  const storedData = localStorage.getItem("people");
  const people = JSON.parse(storedData);
  const characters = filterIsOn ? filteredPeople : people;
  const navigate = useNavigate();

  //CHECK IF ITS LOADED AND FILTERED
  useEffect(() => {
    console.log("get");
    //console.log(people, species, films);

    if (!people) {
      navigate("/");
    }

    if (pathname === "/filtered") {
      setFilterIsOn(true);
    } else if (pathname === "/home") {
      setFilterIsOn(false);
      setPeople(people);
      setLoading(false);
    }
  }, [pathname]);

  //UPDATE LOCALSTORAGE EVERY TIME PEOPLE CHANGES
  /*   useEffect(() => {
    if (people.length > 0) {
      console.log(people);
      localStorage.setItem("people", JSON.stringify(people));
    }
  }, [people]); */

  //HANDLE SHOW MORE BUTTON
  async function handleClick() {
    await axios.get(nextPage).then((res) => {
      setPeople([...people, ...res.data.results]);
      setNextPage(res.data.next);
    });
  }

  return (
    <div className="cl-list">
      <h2 className="cl-list__title">Character List</h2>

      {loading === true ? (
        <p className="cl-list__loading">loading</p>
      ) : (
        <ul>
          {characters.map((element, index) => (
            <li className="cl-list__card" key={index}>
              <CharCard
                element={element}
                index={people.findIndex((a) => a.name === element.name)}
              />
            </li>
          ))}
          <button onClick={() => handleClick()}>Show More</button>
        </ul>
      )}
    </div>
  );
};
