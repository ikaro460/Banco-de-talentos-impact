export const filterUtils = (filter, filterType, people) => {
  const result =
    filterType === "gender"
      ? people.filter((a) => a.gender === filter)
      : //FILTER SPECIES
      filterType === "species"
      ? people.filter((a) =>
          filter === "0"
            ? a.species.length === 0 ||
              a.species.find(
                (specie) =>
                  specie.split("/")[specie.split("/").length - 2] ==
                  Number(filter) + 1
              )
            : a.species.find(
                (specie) =>
                  specie.split("/")[specie.split("/").length - 2] ==
                  Number(filter) + 1
              )
        )
      : //FILTER FILMS
      filterType === "films"
      ? people.filter((a) =>
          a.films.find((f) => f.split("/")[f.split("/").length - 2] == filter)
        )
      : null;
  return result;
};
