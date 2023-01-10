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
      </li>
    </StyledContainer>
  );
};
