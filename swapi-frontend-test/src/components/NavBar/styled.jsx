import styled from "styled-components";

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: var(--bg-black);
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.5);

  .nb-logo {
    cursor: pointer;
    margin: 5px;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  .nb-logo__img {
    margin: 15px;
    width: 80px;
    height: 35px;
  }
`;
