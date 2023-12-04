import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    overflow-x: hidden;
  }

  *, ::after, ::before{
    margin: 0;
    box-sizing: inherit;
  }

  body{
    font-family: 'Poppins', sans-serif;
    height: 100%;
    color: black;
    background-color: #00141a;
  }

  #root{
    height: 100%;
  }

  ::-webkit-scrollbar {
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
  }

  ::-webkit-scrollbar-thumb:hover {
  }  
`;
