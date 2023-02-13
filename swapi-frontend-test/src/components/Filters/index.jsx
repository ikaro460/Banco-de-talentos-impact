import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSwapi } from "../../providers/Swapi";
import { filterUtils } from "../../utils/filterUtils";
import { StyledContainer } from "./styled";

export const Filters = () => {
  const { setFilteredPeople } = useSwapi();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gender: "all",
    species: "all",
    films: "all",
  });

  const people = JSON.parse(localStorage.getItem("people"));
  const species = JSON.parse(localStorage.getItem("species"));
  const films = JSON.parse(localStorage.getItem("films"));

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    //setFilteredPeople(result);
    //handleSubmit();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const array1 =
      formData.gender === "all"
        ? people
        : filterUtils(formData.gender, "gender", people);
    const array2 =
      formData.species === "all"
        ? people
        : filterUtils(formData.species, "species", people);
    const array3 =
      formData.films === "all"
        ? people
        : filterUtils(formData.films, "films", people);

    const commonElements = array1.filter(
      (element) => array2.includes(element) && array3.includes(element)
    );

    setFilteredPeople(commonElements);
    navigate("/filtered/1");
  };

  return (
    <StyledContainer>
      <div className="ft">
        <form onSubmit={handleSubmit}>
          <label>Gender</label>
          <select
            className="ft-form__select"
            name="gender"
            onChange={handleChange}
          >
            <option className="ft-form__option" defaultValue value={"all"}>
              All
            </option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
            <option value={"n/a"}>n/a</option>
          </select>

          <label>Species</label>
          <select
            className="ft-form__select"
            name="species"
            onChange={handleChange}
          >
            <option defaultValue value={"all"}>
              All
            </option>
            {species.map((a, index) => {
              return <option value={index}>{a.name}</option>;
            })}
          </select>

          <label>Films</label>
          <select
            className="ft-form__select"
            name="films"
            onChange={handleChange}
          >
            <option defaultValue value={"all"}>
              All
            </option>
            {films.map((a, index) => {
              return <option value={index + 1}>{a.title}</option>;
            })}
          </select>
          <button className="ft-form__button" type="submit">
            Filter
          </button>
        </form>
      </div>
    </StyledContainer>
  );
};
