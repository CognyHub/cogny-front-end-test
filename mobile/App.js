import React from 'react';
import store from './src/store/store';
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import ProductNavigation from './src/navigation/ProductsNavigation';
import Header from './src/components/Header.jsx';

const theme = {
  colors: {
    onBackground: '#141419',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
          <NavigationContainer>
        <PaperProvider>
          <Header />
            <ProductNavigation />
        </PaperProvider>
          </NavigationContainer>
      </ToastProvider>
    </Provider>
  );
}
