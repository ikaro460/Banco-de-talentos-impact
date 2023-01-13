import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { CharCard } from "../CharCard";

export const CharacterList = () => {
  const {
    people,
    setPeople,
    loading,
    setLoading,
    getPeople,
    nextPage,
    setNextPage,
    filterIsOn,
    setFilterIsOn,
    filteredPeople,
  } = useSwapi();

  const characters =
    loading === true ? null : filterIsOn ? filteredPeople : people;

  const { pathname } = useLocation();
  const storedData = localStorage.getItem("people");
  const storedPeople = JSON.parse(storedData);

  //FIRST GET ON PEOPLE ENDPOINT, CASE ITS FILTERED IT CHANGES TO FILTERED
  useEffect(() => {
    console.log("get");
    if (pathname === "/filtered") {
      setFilterIsOn(true);
      setLoading(false);
    } else if (pathname === "/home" && people.length === 0) {
      getPeople();
      setFilterIsOn(false);
    }
  }, [pathname]);

  //UPDATE LOCALSTORAGE EVERY TIME PEOPLE CHANGES
  useEffect(() => {
    if (people.length > 0) {
      console.log(people);
      localStorage.setItem("people", JSON.stringify(people));
    }
  }, [people]);

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
                index={storedPeople.findIndex((a) => a.name === element.name)}
              />
            </li>
          ))}
          <button onClick={() => handleClick()}>Show More</button>
        </ul>
      )}
    </div>
  );
};
