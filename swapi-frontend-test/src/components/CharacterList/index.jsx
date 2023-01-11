import { useEffect } from "react";
import { useSwapi } from "../../providers/Swapi";
import { CharCard } from "../CharCard";

export const CharacterList = () => {
  const { people, loading, getSwapi } = useSwapi();
  const characters = loading === true ? null : people.data.results;

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
          <li key={index}>
            <CharCard element={element} index={index} />
          </li>
        ))
      )}
    </ul>
  );
};
