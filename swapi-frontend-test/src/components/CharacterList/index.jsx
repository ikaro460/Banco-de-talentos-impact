import axios from "axios";
import { useEffect } from "react";
import { useSwapi } from "../../providers/Swapi";
import { CharCard } from "../CharCard";

export const CharacterList = () => {
  const { people, setPeople, loading, getPeople, nextPage, setNextPage } =
    useSwapi();
  const characters = loading === true ? null : people;

  useEffect(() => {
    getPeople();
  }, []);

  async function handleClick() {
    await axios.get(nextPage).then((res) => {
      setPeople([...people, ...res.data.results]);
      setNextPage(res.data.next);
    });
  }

  return (
    <div className="cl-list">
      <h2 className="cl-list__title">Character List</h2>

      {loading === true ? (
        <p className="cl-list__loading">loading</p>
      ) : (
        <ul>
          {characters.map((element, index) => (
            <li className="cl-list__card" key={index}>
              <CharCard element={element} index={index} />
            </li>
          ))}
          <button onClick={() => handleClick()}>Show More</button>
        </ul>
      )}
    </div>
  );
};
