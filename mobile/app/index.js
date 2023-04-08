import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

// components
import Header from './components/Header'
import Catalog from './components/Catalog'

export default function Page() {
  return (
    <View style={styles.container}>
      <Header />

      <Catalog />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191920',
  },
});
