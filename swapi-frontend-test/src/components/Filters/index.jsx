import React from "react";
import { useSwapi } from "../../providers/Swapi";

export const Filters = () => {
  const { people, setFilteredPeople, setFilterIsOn } = useSwapi();

  const handleChange = (event) => {
    event.preventDefault();
    const gender = event.target.value;
    const filteredPeople = people.filter((a) => a.gender === gender);

    setFilteredPeople(filteredPeople);
    if (gender === "all") {
      setFilterIsOn(false);
    } else {
      setFilterIsOn(true);
    }
  };

  return (
    <div>
      <h2>Filters</h2>
      <label>Gender</label>
      <select onChange={handleChange}>
        <option defaultValue value={"all"}>
          All
        </option>
        <option value={"male"}>Male</option>
        <option value={"female"}>Female</option>
        <option value={"n/a"}>None</option>
      </select>

      <label>Species</label>
      <select onChange={handleChange}>
        <option defaultValue value={"all"}>
          All
        </option>
        <option value={"male"}>Male</option>
        <option value={"female"}>Female</option>
        <option value={"n/a"}>None</option>
      </select>
    </div>
  );
};
