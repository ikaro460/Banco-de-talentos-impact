import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharPageComp } from "../../components/CharPageComp";
import { useSwapi } from "../../providers/Swapi";

export const CharPage = () => {
  const { people, films, getSwapi, loading } = useSwapi();
  const { charId } = useParams();

  return (
    <div>
      <h1>CharPage</h1>
      <div>Character ID: {charId}</div>
      {loading === true ? (
        <p>loading</p>
      ) : (
        <CharPageComp element={people.data.results[charId - 1]} />
      )}
    </div>
  );
};
