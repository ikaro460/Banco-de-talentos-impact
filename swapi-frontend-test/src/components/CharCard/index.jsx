import React from "react";
import { useNavigate } from "react-router-dom";
import { avatarPics } from "../../utils/avatarPics";
import { StyledContainer } from "./styled";

export const CharCard = ({ element, index }) => {
  const navigate = useNavigate();

  const imgSrc = avatarPics.filter((a) => a.name === element.name);

  const handleClick = (charId) => {
    navigate(`/char/${charId + 1}`);
  };

  return (
    <StyledContainer>
      <div className="cc-card" key={index} onClick={() => handleClick(index)}>
        <figure>
          <img
            className="cc-card__img"
            src={imgSrc.length > 0 ? imgSrc[0].photo_url : null}
            alt="avatar"
          />
        </figure>
        <h3 className="cc-card__name">{element.name}</h3>
      </div>
    </StyledContainer>
  );
};
