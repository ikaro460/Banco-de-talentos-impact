import React from "react";
import { useSwapi } from "../../providers/Swapi";
import { StyledContainer } from "./styled";

export const CharPageComp = ({ element }) => {
  const { films } = useSwapi();

  return (
    <StyledContainer>
      <div>
        <h2>{element.name}</h2>
        <h4>Gender</h4>
        <p>{element.gender}</p>
      </div>
      <div>
        <h4>Species</h4>
        {element.species.length > 0
          ? element.species.map((a) => {
              return <p>{a[a.length - 2]}</p>;
            })
          : " Human"}
      </div>
      <ul>
        <h4>Films</h4>
        {element.films.map((a, id) => {
          const filmId = a.split("/")[a.split("/").length - 2];
          const filmName = films.data.results.find(
            (o) => o.episode_id == filmId
          );
          return <li key={id}>{filmName.title}</li>;
        })}
      </ul>
    </StyledContainer>
  );
};
