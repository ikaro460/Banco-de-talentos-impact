import React from "react";
import { useParams } from "react-router-dom";

export const CharPage = () => {
  const { charId } = useParams();

  return (
    <div>
      <h1>CharPage</h1>
      <div>Character ID: {charId}</div>
    </div>
  );
};
