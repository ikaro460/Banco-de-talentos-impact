import styled from "styled-components";

export const StyledContainer = styled.div`
  .sb-ctn {
    --size: 40px;
    margin: 5px 15px;
    display: flex;
    align-items: center;
    border: 2px solid var(--main-yellow);
    border-radius: 50px;
    height: var(--size);
    padding: 1px 3px;
  }

  .sb-ctn__input {
    flex-grow: 1;
    font-size: 1rem;
    padding: 0 1em;
    border: none;
    background: none;
    color: var(--post-white);
    height: var(--size);
  }

  .sb-ctn__input:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .sb-ctn__btn {
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    color: var(--post-white);
    border-radius: 50%;
    cursor: pointer;
    width: calc(var(--size) - 2px);
    height: calc(var(--size) - 2px);
    margin-left: auto;
    transition: background-color 0.3s ease-in-out;
  }

  .sb-ctn__btn:hover {
    background-color: var(--main-yellow);
  }
`;
