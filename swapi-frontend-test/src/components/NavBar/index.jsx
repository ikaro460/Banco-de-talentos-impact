import React from "react";
import { SearchBar } from "../SearchBar";
import { StyledContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import ImageSrc from "../../assets/star-wars-logo-3-1.png";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer className="nb">
      <figure className="nb-logo" onClick={() => navigate("/home/1")}>
        <img className="nb-logo__img" src={ImageSrc} alt="avatar" />
      </figure>
      <SearchBar />
    </StyledContainer>
  );
};
