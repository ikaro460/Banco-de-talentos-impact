import styled from "styled-components";

export const StyledContainer = styled.div`
  .ft {
    margin: 15px;
    padding: 20px;
    background-color: var(--bg-grey);
    border-radius: 50px;
  }

  .ft-form {
    display: flex;
  }

  .ft-form__box {
    display: flex;
    flex-direction: column;
  }

  .ft-form__label {
    font-size: 1rem;
  }

  .ft-form__select {
    color: var(--main-yellow);
    border: none;
    background: none;
    width: 150px;
    margin: 15px;
    border: 2px solid transparent;
    border-radius: 5px;
  }

  .ft-form__select:hover {
    border: 2px solid var(--main-yellow);
  }

  .ft-form__option {
    color: black;
  }

  .ft-form__button {
  }
`;
