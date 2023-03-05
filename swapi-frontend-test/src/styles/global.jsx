import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/death-star.jpg";

export default createGlobalStyle`
  
  //GLOBAL COLOR PALETTE
  
  :root {
        --bg-black: #000;
        --tp-black: rgba(0, 0, 0, 0.5);
        --bg-grey: rgb(29,30,31);
        --main-yellow: rgb(219, 169, 13);
        --post-white: #fff;
        --title-blue: #29325D;
        --text-grey: #666;
        --button-grey: #e8e8e8;
        --purple-1: #6c80be;
        
        //shadows
        --sd-yellow: rgba(219, 169, 13, 0.2);
    }

  #root{
    width: 100%;
  }
  
  body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: var(--post-white);
    display: flex;
    justify-content: center;
    font-weight: 400;
    background-image: url(${backgroundImage});
}
  .App-header {
    display:flex;
    flex-direction: column;
    align-items: center;
}
`;
