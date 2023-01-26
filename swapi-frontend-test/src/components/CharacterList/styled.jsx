import styled from "styled-components";

export const StyledContainer = styled.div`
  color: var(--main-yellow);
  font-size: 24px;

  .cl-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 900px;
  }

  .cl-list__box {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px;
    padding: 5px;
  }

  .cl-list__card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 150px;
    margin: 10px;
    padding: 25px;
    border: 2px solid var(--main-yellow);
  }
`;
