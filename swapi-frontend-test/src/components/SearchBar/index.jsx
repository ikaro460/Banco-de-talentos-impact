import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";

export const SearchBar = () => {
  const { setFilteredPeople, setLoading } = useSwapi();
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  async function handleClick(e) {
    setLoading(true);
    navigate("/filtered");

    if (searchInput.length > 0) {
      await axios
        .get(`https://swapi.dev/api/people/?search=${searchInput}`)
        .then((res) => {
          setFilteredPeople(res.data.results);
          setLoading(false);
        });
    }
  }

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
