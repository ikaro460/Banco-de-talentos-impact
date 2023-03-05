import styled from "styled-components";

export const StyledContainer = styled.div`
  .pb-nav {
    display: flex;
    justify-content: center;
  }

  .pb-nav__btn {
    color: var(--main-yellow);
    margin: 5px;
    width: 15%;
    cursor: pointer;
    border: 2px solid none;
    background: none;
    transition: border 0.5s;

    :hover {
      border: 2px solid var(--main-yellow);
    }
  }
`;
