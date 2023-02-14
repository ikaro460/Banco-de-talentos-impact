import React from "react";
import { CharacterList } from "../../components/CharacterList";
import { Filters } from "../../components/Filters";
import { NavBar } from "../../components/NavBar";
import { SearchBar } from "../../components/SearchBar";
import { StyledContainer } from "./styled";

export const Home = () => {
  return (
    <StyledContainer>
      <div className="hp-page">
        <NavBar />
        <div className="hp-page__filters">
          <Filters />
        </div>
        <CharacterList />
      </div>
    </StyledContainer>
  );
};
