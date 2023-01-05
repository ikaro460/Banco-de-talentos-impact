import axios from "axios";
import React, { useState } from "react";
import { useSwapi } from "../../providers/Swapi";

export const SearchBar = () => {
  const { setSwapi, setLoading } = useSwapi();

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
          setSwapi(res);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};
