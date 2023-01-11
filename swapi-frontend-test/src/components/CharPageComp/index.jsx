import React from "react";
import { useSwapi } from "../../providers/Swapi";
import { StyledContainer } from "./styled";

export const CharPageComp = ({ element }) => {
  const { films } = useSwapi();

  return (
    <StyledContainer>
      <div className="cp-title">
        <h2 className="cp-title__name">{element.name}</h2>
      </div>
      <div className="cp-info">
        <h4 className="cp-info__gender-title">Gender</h4>
        <p className="cp-info__gender-name">{element.gender}</p>
        <h4 className="cp-info__species-title">Species</h4>
        {element.species.length > 0 ? (
          element.species.map((a) => {
            return <p className="cp-info__species-name">{a[a.length - 2]}</p>;
          })
        ) : (
          <p className="cp-info__species-name">Human</p>
        )}
        <ul className="cp-films">
          <h4 className="cp-films__title">Films</h4>
          {element.films.map((a, id) => {
            const filmId = a.split("/")[a.split("/").length - 2];
            const filmName = films.data.results.find(
              (o) => o.episode_id == filmId
            );
            return (
              <li className="cp-films__film-title" key={id}>
                {filmName.title}
              </li>
            );
          })}
        </ul>
      </div>
    </StyledContainer>
  );
};
