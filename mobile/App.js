import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './src/pages/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141419',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
