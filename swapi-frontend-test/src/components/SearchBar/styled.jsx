import styled from "styled-components";

export const StyledContainer = styled.div`
  .sb-ctn {
    --size: 40px;
    margin: 5px 15px;
    display: flex;
    align-items: center;
    border: 2px solid var(--main-yellow);
    border-radius: 2px;
    height: var(--size);
    padding: 1px 5px;
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
    cursor: pointer;
    box-shadow: 0 0px 15px var(--sd-yellow);
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    color: var(--post-white);
    border-radius: 50%;
    width: calc(var(--size) - 2px);
    height: calc(var(--size) - 2px);
    margin-left: auto;
    transition: box-shadow 0.3s ease-in-out;
  }

  .sb-ctn__btn:hover {
    box-shadow: 0 2px 15px var(--sd-yellow);
  }

  .sb-closed {
    margin: 0 23px;
  }
`;
