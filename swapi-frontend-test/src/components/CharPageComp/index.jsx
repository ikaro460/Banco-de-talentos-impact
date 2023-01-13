import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { filterUtils } from "../../utils/filterUtils";
import { StyledContainer } from "./styled";

export const CharPageComp = ({ element }) => {
  const { films, loadingFilms, getFilms, setFilteredPeople } = useSwapi();
  const navigate = useNavigate();
  const storedPeople = localStorage.getItem("people");
  const people = JSON.parse(storedPeople);

  useEffect(() => {
    getFilms();
  }, []);

  const handleClick = (filter, filterType) => {
    //console.log("filterType", filterType);
    //console.log("filter", filter);

    const result = filterUtils(filter, filterType, people);
    setFilteredPeople(result);

    navigate(`/filtered`);
  };

  return (
    <StyledContainer>
      <div className="cp-title">
        <h2 className="cp-title__name">{element.name}</h2>
      </div>
      <div className="cp-info">
        <h4 className="cp-info__gender-title">Gender</h4>
        <p
          className="cp-info__gender-name"
          onClick={() => handleClick(element.gender, "gender")}
        >
          {element.gender}
        </p>
        <h4 className="cp-info__species-title">Species</h4>
        {element.species.length > 0 ? (
          element.species.map((a) => {
            return (
              <p
                onClick={() => handleClick(a, "species")}
                className="cp-info__species-name"
              >
                {a[a.length - 2]}
              </p>
            );
          })
        ) : (
          <p
            onClick={() => handleClick("human", "species")}
            className="cp-info__species-name"
          >
            Human
          </p>
        )}
        <h4 className="cp-films__title">Films</h4>
        {loadingFilms === true ? (
          <p key={"loading"}>loading</p>
        ) : (
          <ul className="cp-films">
            {element.films.map((a, index) => {
              const filmId = a.split("/")[a.split("/").length - 2];
              const filmName = films.find((o) => o.episode_id == filmId);

              return (
                <li className="cp-films__film-title" key={index}>
                  {filmName.title}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </StyledContainer>
  );
};
