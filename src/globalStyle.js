import  { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

--PrimaryColor: #FAFAFA;
--SecondaryColor: #115E59;
--TextColor: #000000;


    * {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }

     body {
       background-color: var(--PrimaryColor);
     } 

     section, h1, h2{
      background-color: var(--SecondaryColor);
      color: var(--SecondaryColor);
     }

     p {
      color: var(--TextColor);
     }
`

export default globalStyle