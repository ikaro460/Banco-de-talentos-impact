import axios from "axios";
import React, { useState } from "react";
import { useSwapi } from "../../providers/Swapi";

export const SearchBar = () => {
  const { setPeople, setLoading } = useSwapi();

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleClick = (e) => {
    setLoading(true);

    if (searchInput.length > 0) {
      axios
        .get(`https://swapi.dev/api/people/?search=${searchInput}`)
        .then((res) => {
          setPeople(res);
          setLoading(false);
        });
    }
  };

  return (
    <div className="sb-ctn">
      <input
        className="sb-ctn__text"
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <button className="sb-ctn__btn" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};
