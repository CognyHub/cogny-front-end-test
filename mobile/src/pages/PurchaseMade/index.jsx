import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import CartInfoScreen from '../../components/organisms/ShoppingCart/CartInfoScreen';

export default function PurchaseMade() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <CartInfoScreen text='Compra finalizada!' />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 60,
  },
});
