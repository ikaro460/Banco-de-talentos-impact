import React from "react";
import { useNavigate } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { StyledContainer } from "./styled";

export const CharCard = ({ element, index }) => {
  const { films } = useSwapi();

  const navigate = useNavigate();

  const handleClick = (charId) => {
    navigate(`/char/${charId + 1}`);
  };

  return (
    <StyledContainer>
      <li key={index} onClick={() => handleClick(index)}>
        <h3>{element.name}</h3>
        <div>
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
      </li>
    </StyledContainer>
  );
};
