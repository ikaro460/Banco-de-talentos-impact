import React from "react";
import { useNavigate } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { StyledContainer } from "./styled";

export const CharCard = ({ element, index }) => {
  const navigate = useNavigate();

  const handleClick = (charId) => {
    navigate(`/char/${charId + 1}`);
  };

  return (
    <StyledContainer>
      <div className="cc-card" key={index} onClick={() => handleClick(index)}>
        <h3 className="cc-card__name">{element.name}</h3>
      </div>
    </StyledContainer>
  );
};
