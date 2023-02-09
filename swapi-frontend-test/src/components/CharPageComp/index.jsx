import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { avatarPics } from "../../utils/avatarPics";
import { filterUtils } from "../../utils/filterUtils";
import { StyledContainer } from "./styled";

export const CharPageComp = ({ element }) => {
  const { films, loadingFilms, getFilms, setFilteredPeople } = useSwapi();
  const navigate = useNavigate();

  const people = JSON.parse(localStorage.getItem("people"));
  const species = JSON.parse(localStorage.getItem("species"));
  const imgSrc = avatarPics.filter((a) => a.name === element.name);

  useEffect(() => {
    getFilms();
  }, []);

  const handleClick = (filter, filterType) => {
    //console.log("filterType", filterType);
    //console.log("filter", filter);

    const result = filterUtils(filter, filterType, people);
    setFilteredPeople(result);

    navigate(`/filtered/1`);
  };

  return (
    <StyledContainer>
      <div className="cp-title">
        <img
          className="cc-card__img"
          src={imgSrc.length > 0 ? imgSrc[0].photo_url : null}
          alt="avatar"
        />
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
                onClick={() =>
                  handleClick(
                    a.split("/")[a.split("/").length - 2] - 1,
                    "species"
                  )
                }
                className="cp-info__species-name"
              >
                {species[a.split("/")[a.split("/").length - 2] - 1].name}
              </p>
            );
          })
        ) : (
          <p
            onClick={() => handleClick("0", "species")}
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
              const filmName = films[filmId - 1].title;

              return (
                <li
                  onClick={() => handleClick(index + 1, "films")}
                  className="cp-films__film-title"
                  key={index}
                >
                  {filmName}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </StyledContainer>
  );
};
