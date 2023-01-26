import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  //GLOBAL COLOR PALETTE
  
  :root {
        --background-black: #000000;
        --main-yellow: #FFE81F;
        --post-white: #fff;
        --title-blue: #29325D;
        --text-grey: #666;
        --button-grey: #e8e8e8;
        --purple-1: #6c80be
    }
  
  body{
    color: var(--post-white);
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-family: sans-serif, "Source Sans Pro";
    background-color: var(--background-black);
}
  .App {
    padding: 25px;
  }
  .App-header {
    display:flex;
    flex-direction: column;
    align-items: center;
}
`;
