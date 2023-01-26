import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 900px;
  border: 2px solid yellow;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .hp-page {
    width: 900px;
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hp-page__nav {
    display: flex;
    flex-direction: column;
  }
`;
