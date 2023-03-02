import { ThemeProvider } from 'styled-components';
import AppRouter from './AppRouter';
import Provider from './context/Provider';
import { GlobalStyle } from './style/GlobalStyle';
import { theme } from './style/theme';

function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <AppRouter />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
