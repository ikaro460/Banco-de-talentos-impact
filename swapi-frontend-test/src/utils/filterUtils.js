export const filterUtils = (filter, filterType, people) => {
  console.log(filterType);
  console.log(filter);

  const result =
    filterType === "gender"
      ? people.filter((a) => a.gender === filter)
      : filterType === "species"
      ? people.filter((a) =>
          filter === "human"
            ? a.species.length === 0
            : a.species.find((a) => a === filter)
        )
      : filterType === "films"
      ? people.filter((a) => a.films === filter)
      : null;

  return result;
};
