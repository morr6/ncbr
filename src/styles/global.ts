import { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components';
import { theme } from './theme';

type GlobalStyleProps = {
  theme: typeof theme;
};

const GlobalStyles: GlobalStyleComponent<GlobalStyleProps, DefaultTheme> = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;

    body {
      width: 100%;
      min-height: 100vh;
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.colors.text.default};

      .MuiButtonBase-root  {
        background: ${({ theme }) => theme.colors.azure};
      }
    }
  }
`;

export default GlobalStyles;
