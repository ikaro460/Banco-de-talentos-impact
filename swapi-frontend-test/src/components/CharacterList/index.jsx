import { useEffect } from "react";
import { useSwapi } from "../../providers/Swapi";
import { CharCard } from "../CharCard";

export const CharacterList = () => {
  const { swapi, loading, getSwapi } = useSwapi();
  const characters = loading === true ? null : swapi.data.results;

  useEffect(() => {
    getSwapi();
  }, []);

  return (
    <ul>
      <h2>Character List</h2>
      {loading === true ? (
        <p>loading</p>
      ) : (
        characters.map((element, index) => (
          <CharCard element={element} index={index} />
        ))
      )}
    </ul>
  );
};
