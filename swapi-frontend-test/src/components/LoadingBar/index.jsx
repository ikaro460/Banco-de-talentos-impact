import React, { useState, useEffect } from "react";
import { StyledContainer } from "./styled";

export const LoadingBar = ({ progress }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  return (
    <StyledContainer className="loading-bar" style={{ width: `500px` }}>
      <div className="progress" style={{ width: `${width}%` }}>
        Loading
      </div>
    </StyledContainer>
  );
};

export default LoadingBar;
