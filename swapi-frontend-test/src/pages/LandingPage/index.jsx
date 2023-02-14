import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useSwapi } from "../../providers/Swapi";
import { NavBar } from "../../components/NavBar";

export const LandingPage = () => {
  const { getPeople, getFilms, getSpecies, setLoading } = useSwapi();
  const [progress, setProgress] = useState("Loading Films");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getSwapi() {
      await getFilms();
      setProgress("Loading species");

      await getSpecies();
      setProgress("Loading characters");

      await getPeople();
      setProgress("Complete");

      navigate("/home/1");
    }
    getSwapi();
  }, []);

  return (
    <div>
      <NavBar />
      <FontAwesomeIcon icon={faSpinner} spin />
      <h2>{progress}</h2>
    </div>
  );
};
