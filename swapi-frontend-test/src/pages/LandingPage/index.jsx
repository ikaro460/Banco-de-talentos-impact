import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div>
      <h1>LandingPage</h1>
      <Link to="/home">
        <button>Enter</button>
      </Link>
    </div>
  );
};
