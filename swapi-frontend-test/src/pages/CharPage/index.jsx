import React from "react";
import { useParams } from "react-router-dom";
import { CharPageComp } from "../../components/CharPageComp";

export const CharPage = () => {
  const { charId } = useParams();

  const storedData = localStorage.getItem("people");
  const storedPeople = JSON.parse(storedData);
  const people = storedPeople[charId - 1];

  return (
    <div>
      <h1>CharPage</h1>
      <div>Character ID: {charId}</div>
      <CharPageComp element={people} />
    </div>
  );
};
