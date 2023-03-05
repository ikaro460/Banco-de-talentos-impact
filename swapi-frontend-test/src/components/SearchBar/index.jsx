import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { StyledContainer } from "./styled";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBar = () => {
  const { setFilteredPeople, setLoading } = useSwapi();
  const [searchInput, setSearchInput] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleInputBlur = () => {
    setShowSearchBar(false);
  };

  async function handleClick(e) {
    setShowSearchBar(!showSearchBar);
    setLoading(true);
    navigate("/filtered/1");

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
    <StyledContainer>
      {showSearchBar && (
        <form className="sb-ctn">
          <button className="sb-ctn__btn" onClick={handleClick}>
            <FontAwesomeIcon
              icon={faSearch}
              size="2x"
              className="search-icon"
            />
          </button>
          <input
            className="sb-ctn__input"
            type="text"
            placeholder="Search here"
            name="q"
            onChange={handleChange}
            value={searchInput}
            onBlur={handleInputBlur}
          />
          <button className="sb-ctn__btn" onClick={handleClick}>
            <FontAwesomeIcon icon={faTimes} size="2x" className="search-icon" />
          </button>
        </form>
      )}
      {!showSearchBar && (
        <div className="sb-closed">
          <button className="sb-ctn__btn" onClick={handleClick}>
            <FontAwesomeIcon
              icon={faSearch}
              size="2x"
              className="search-icon"
            />
          </button>
        </div>
      )}
    </StyledContainer>
  );
};
