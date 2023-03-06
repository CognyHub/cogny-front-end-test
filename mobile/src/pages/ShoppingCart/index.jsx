import { StyleSheet, View } from 'react-native'
import ShoppingCartTemplate from '../../components/template/ShoppingCartTemplate'

export default function ShoppingCart() {
  return (
    <View style={styles.container}>
      <ShoppingCartTemplate />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    paddingTop: 60
  },
});

