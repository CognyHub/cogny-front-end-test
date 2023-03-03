import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import Provider from './src/context/Provider';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Routes/>
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}