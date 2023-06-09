import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import RootRouter from 'root/RootRouter';
import store from 'store';
import GlobalStyles from 'styles/global';
import { theme } from 'styles/theme';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

const TEST_USER = [
  {
    email: 'test@test.pl',
    username: 'test',
    password: 'testtest',
    token: 'hXk6GbpX?RFNiBpUBzCsAGZ9GV',
  },
];

const App = () => {
  // test user added to local storage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(TEST_USER));
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer position="bottom-center" autoClose={3000} />
        <GlobalStyles />
        <RootRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
