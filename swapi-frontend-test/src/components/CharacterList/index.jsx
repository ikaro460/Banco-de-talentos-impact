import { useEffect } from "react";
import { useSwapi } from "../../providers/Swapi";

export const CharacterList = () => {
  const { swapi, loading, getSwapi } = useSwapi();

  useEffect(() => {
    getSwapi();
  }, []);

  const characters = loading === true ? null : swapi.data.results;

  return (
    <ul>
      {loading === true ? (
        <p>loading</p>
      ) : (
        characters.map((a, index) => <li key={index}>{a.name}</li>)
      )}
    </ul>
  );
};
