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
    <ul className="cl-list">
      <h2 className="cl-list__title">Character List</h2>

      {loading === true ? (
        <p className="cl-list__loading">loading</p>
      ) : (
        characters.map((element, index) => (
          <li className="cl-list__card" key={index}>
            <CharCard element={element} index={index} />
          </li>
        ))
      )}
    </ul>
  );
};
