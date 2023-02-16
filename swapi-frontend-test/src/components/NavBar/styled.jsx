import styled from "styled-components";

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: var(--background-black);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nb-logo {
    cursor: pointer;
    margin: 5px;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  .nb-logo__img {
    width: 80px;
    height: 35px;
  }
`;
