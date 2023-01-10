import React from "react";
import { CharacterList } from "../../components/CharacterList";
import { PageBar } from "../../components/PageBar";
import { SearchBar } from "../../components/SearchBar";

export const Home = () => {
  return (
    <div>
      Home
      <PageBar />
      <SearchBar />
      <CharacterList />
    </div>
  );
};
