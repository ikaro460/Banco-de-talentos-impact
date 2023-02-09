import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { CharCard } from "../CharCard";
import { PageBar } from "../PageBar";
import { StyledContainer } from "./styled";

export const CharacterList = () => {
  const {
    setPeople,
    loading,
    setLoading,
    filterIsOn,
    setFilterIsOn,
    filteredPeople,
  } = useSwapi();

  //NAVIGATION
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pageNumber = pathname.split("/")[2];

  const people = JSON.parse(localStorage.getItem("people"));
  const characters = filterIsOn ? filteredPeople : people;

  //CHECK IF ITS LOADED AND FILTERED
  useEffect(() => {
    //CHECK LOAD
    if (!people) {
      navigate("/");
    }

    //CHECK FILTER
    if (pathname.split("/")[1] === "filtered") {
      console.log("filter");
      setFilterIsOn(true);
    } else if (pathname.split("/")[1] === "home") {
      console.log("home");
      setFilterIsOn(false);
      setPeople(people);
      setLoading(false);
    }
  }, [pathname]);

  //PAGINATION
  function paginateArray(array, page) {
    --page;
    // because pages logically start with 1, but technically with 0
    console.log(array, page, array.slice(page * 12, (page + 1) * 12));
    return array.slice(page * 12, (page + 1) * 12);
  }
  const paginatedItems = paginateArray(characters, Number(pageNumber));
  console.log(paginatedItems);
  return (
    <StyledContainer>
      <div className="cl-list">
        <h2 className="cl-list__title">Character List</h2>

        {loading === true ? (
          <p className="cl-list__loading">loading</p>
        ) : (
          <ul className="cl-list__box">
            {paginatedItems.map((element, index) => {
              console.log(element);
              return (
                <li className="cl-list__card" key={index}>
                  <CharCard
                    element={element}
                    index={people.findIndex((a) => a.name === element.name)}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <PageBar howManyPages={Math.ceil(characters.length / 12)} />
    </StyledContainer>
  );
};
