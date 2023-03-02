import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000000;
  }

  body, input, button {
    font-family:  'Roboto', 'Open Sans', sans-serif;
    font-style: normal;
  }
`
