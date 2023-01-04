import { useSwapi } from "../../providers/Swapi";

export const PageBar = () => {
  const { page, setPage, setLoading, setSwapi } = useSwapi();

  return (
    <nav>
      <button
        onClick={() => {
          setLoading(true);
          setSwapi(null);
          setPage(page - 1);
          console.log(page);
        }}
      >
        Previous Page
      </button>

      <button
        onClick={() => {
          setLoading(true);
          setSwapi(null);
          setPage(page + 1);
          console.log(page);
        }}
      >
        Next Page
      </button>
    </nav>
  );
};
