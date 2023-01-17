import React from "react";
import { useSwapi } from "../../providers/Swapi";
import { filterUtils } from "../../utils/filterUtils";

export const Filters = () => {
  const { filteredPeople, setFilteredPeople, filterIsOn, setFilterIsOn } =
    useSwapi();

  const people = JSON.parse(localStorage.getItem("people"));
  const species = JSON.parse(localStorage.getItem("species"));
  const films = JSON.parse(localStorage.getItem("films"));

  const handleChange = (filterType, event) => {
    event.preventDefault();
    const filter = event.target.value;

    const result = filterUtils(filter, filterType, people);
    console.log(result);

    setFilteredPeople(result);
    if (filter === "all") {
      setFilterIsOn(false);
    } else {
      setFilterIsOn(true);
    }
  };

  return (
    <div>
      <label>Gender</label>
      <select onChange={handleChange.bind(this, "gender")}>
        <option defaultValue value={"all"}>
          All
        </option>
        <option value={"male"}>Male</option>
        <option value={"female"}>Female</option>
        <option value={"n/a"}>n/a</option>
      </select>

      <label>Species</label>
      <select onChange={handleChange.bind(this, "species")}>
        <option defaultValue value={"all"}>
          All
        </option>
        {species.map((a, index) => {
          return <option value={index}>{a.name}</option>;
        })}
      </select>

      <label>Films</label>
      <select onChange={handleChange.bind(this, "films")}>
        <option defaultValue value={"all"}>
          All
        </option>
        {films.map((a, index) => {
          return <option value={index + 1}>{a.title}</option>;
        })}
      </select>
    </div>
  );
};
