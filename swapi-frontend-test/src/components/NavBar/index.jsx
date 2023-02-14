import React from "react";
import { SearchBar } from "../SearchBar";
import { StyledContainer } from "./styled";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer className="nb">
      <h1 onClick={() => navigate("/home/1")}>nav</h1>
      <SearchBar />
    </StyledContainer>
  );
};
