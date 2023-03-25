import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;

    body {
      width: 100%;
      min-height: 100vh;
      padding: 0;
    }
  }
`;

export default GlobalStyles;
