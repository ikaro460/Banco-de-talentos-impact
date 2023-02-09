import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "../../components/LoadingBar";
import { useSwapi } from "../../providers/Swapi";

export const LandingPage = () => {
  const {
    people,
    getPeople,
    films,
    getFilms,
    getSpecies,
    loading,
    setLoading,
  } = useSwapi();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    async function getSwapi() {
      await getFilms();
      setProgress(33);

      await getSpecies();
      setProgress(66);

      await getPeople();
      setProgress(100);
      setLoading(false);
    }
    getSwapi();
  }, []);

  return (
    <div>
      <h1>LandingPage</h1>
      {loading ? (
        <LoadingBar progress={progress} />
      ) : (
        <Link to="/home/1">
          <button>Enter</button>
        </Link>
      )}
    </div>
  );
};
