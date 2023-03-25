import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import RootRouter from './root/RootRouter';
import store from './store';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RootRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
