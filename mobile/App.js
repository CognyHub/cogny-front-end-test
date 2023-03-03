import { StatusBar } from 'expo-status-bar';
import React from 'react';
import store from './src/store/store';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Home from '../web/src/pages/Home';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
