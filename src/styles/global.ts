import { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components';
import { theme } from './theme';

type GlobalStyleProps = {
  theme: typeof theme;
};

const GlobalStyles: GlobalStyleComponent<GlobalStyleProps, DefaultTheme> = createGlobalStyle`
  html {
    * { 
      box-sizing: border-box; 
    }

    font-size: 100%;

    body {
      width: 100%;
      min-height: 100vh;
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.colors.text.default};

      .MuiButton-outlined  {
        color: ${({ theme }) => theme.colors.azure}!important;
      }

      .MuiButton-contained {
        background: ${({ theme }) => theme.colors.azure};
      }

      .MuiCheckbox-root {
        color: ${({ theme }) => theme.colors.azure}!important;
      }
    }
  }
`;

export default GlobalStyles;
