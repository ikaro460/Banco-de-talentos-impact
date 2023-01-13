import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../../components/CharacterList";
import { PageBar } from "../../components/PageBar";
import { SearchBar } from "../../components/SearchBar";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 onClick={() => navigate("/home")}>Home</h1>
      <PageBar />
      <SearchBar />
      <CharacterList />
    </div>
  );
};
