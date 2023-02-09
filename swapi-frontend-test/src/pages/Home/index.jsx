import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../../components/CharacterList";
import { Filters } from "../../components/Filters";
import { SearchBar } from "../../components/SearchBar";
import { StyledContainer } from "./styled";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <div className="hp-page">
        <h1 className="hp-page__title" onClick={() => navigate("/home/1")}>
          Home
        </h1>
        <div className="hp-page__nav">
          <SearchBar />
          <Filters />
        </div>
        <CharacterList />
      </div>
    </StyledContainer>
  );
};
