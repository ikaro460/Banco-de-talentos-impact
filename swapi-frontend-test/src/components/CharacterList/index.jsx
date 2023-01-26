import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { CharCard } from "../CharCard";
import { PageBar } from "../PageBar";
import { StyledContainer } from "./styled";

export const CharacterList = () => {
  const {
    setPeople,
    loading,
    setLoading,
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

  //HANDLE SHOW MORE BUTTON
  async function handleClick() {
    await axios.get(nextPage).then((res) => {
      setPeople([...people, ...res.data.results]);
      setNextPage(res.data.next);
    });
  }

  return (
    <StyledContainer>
      <div className="cl-list">
        <h2 className="cl-list__title">Character List</h2>
        <PageBar />

        {loading === true ? (
          <p className="cl-list__loading">loading</p>
        ) : (
          <ul className="cl-list__box">
            {characters.map((element, index) => (
              <li className="cl-list__card" key={index}>
                <CharCard
                  element={element}
                  index={people.findIndex((a) => a.name === element.name)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledContainer>
  );
};
