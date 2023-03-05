import styled from "styled-components";

export const StyledContainer = styled.div`
  .cc-card {
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0);
    transition: box-shadow 0.1s ease-in-out;
    transition: width 0.5s ease-in-out;

    cursor: pointer;
    background-color: var(--bg-grey);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    figure {
      margin: 0;
    }

    :hover {
      box-shadow: 0 0px 6px rgba(255, 255, 255, 0.299);
    }
  }

  .cc-card__name {
    display: flex;
    align-items: center;
    font-size: 28px;
    height: 100px;
    padding: 2%;
    color: var(--main-yellow);
  }

  .cc-card__img {
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }
`;
