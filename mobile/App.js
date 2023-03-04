import React from 'react';
import store from './src/store/store';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { Provider } from 'react-redux';
import Home from './src/pages/Home.jsx';

const theme = {
  colors: {
    onBackground: '#141419',
  },
};

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PaperProvider theme={theme}>
            <Home />
        </PaperProvider>
      </Provider>
    </>
  );
}