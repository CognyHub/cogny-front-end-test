import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Content from './routes/Content';
import GlobalStyle from './styles/Globals';
import CognyContext from './context/CognyContext';
import { lightTheme, darkTheme } from './components/Themes';

function App() {
  const { theme } = useContext(CognyContext);
  // const { theme } = useContext(DeliveryContext);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div>
        <GlobalStyle />
        <p>Xablau</p>
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
