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
      <h2>Character List</h2>
      {loading === true ? (
        <p>loading</p>
      ) : (
        characters.map((element, index) => (
          <li key={index}>
            <h3>{element.name}</h3>
            <div>
              <h4>Gender</h4>
              <p>{element.gender}</p>
            </div>
            <div>
              <h4>Species</h4>
              {element.species.length > 0
                ? element.species.map((a) => {
                    return <p>{a[a.length - 2]}</p>;
                  })
                : " Human"}
            </div>
            <ul>
              <h4>Films</h4>
              {element.films.map((a, id) => {
                return <li key={id}>{a[a.length - 2]}</li>;
              })}
            </ul>
          </li>
        ))
      )}
    </ul>
  );
};
