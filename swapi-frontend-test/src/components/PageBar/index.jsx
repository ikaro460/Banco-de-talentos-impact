import axios from "axios";
import { useSwapi } from "../../providers/Swapi";

export const PageBar = () => {
  const { swapi, setLoading, setSwapi } = useSwapi();

  const HandleClick = (click) => {
    const nextPage = swapi.data.next;
    const prevPage = swapi.data.previous;

    const url = click === "next" ? nextPage : prevPage;

    axios.get(url).then((res) => {
      setSwapi(res);
      setLoading(false);
    });
  };

  return (
    <nav>
      <button
        onClick={() => {
          setLoading(true);
          HandleClick("prev");
        }}
      >
        Previous Page
      </button>

      <button
        onClick={() => {
          setLoading(true);
          HandleClick("next");
        }}
      >
        Next Page
      </button>
    </nav>
  );
};
