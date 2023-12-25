import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  *,
  ::after,
  ::before {
    margin: 0;
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: black;
    background-color: #00141a;
    height: 100vh;
    margin: 0; /* Ensure no default margin */
  }

  #root {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
  }

  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffffff50;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ffffff90;
  }
`;
