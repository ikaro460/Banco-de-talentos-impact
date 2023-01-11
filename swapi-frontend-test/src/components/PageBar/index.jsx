import axios from "axios";
import { useSwapi } from "../../providers/Swapi";

export const PageBar = () => {
  const { people, setLoading, setPeople } = useSwapi();

  const handleClick = (click) => {
    const nextPage = people.data.next;
    const prevPage = people.data.previous;

    const url = click === "next" ? nextPage : prevPage;

    axios.get(url).then((res) => {
      setPeople(res);
      setLoading(false);
    });
  };

  return (
    <nav>
      <button
        onClick={() => {
          setLoading(true);
          handleClick("prev");
        }}
      >
        Previous Page
      </button>

      <button
        onClick={() => {
          setLoading(true);
          handleClick("next");
        }}
      >
        Next Page
      </button>
    </nav>
  );
};
