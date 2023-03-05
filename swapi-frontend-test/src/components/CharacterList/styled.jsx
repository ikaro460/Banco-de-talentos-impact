import styled from "styled-components";

export const StyledContainer = styled.div`
  color: var(--main-yellow);
  font-size: 24px;
  width: 100%;

  .cl-list__box {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .cl-list__card {
    width: 25%;
  }
`;
