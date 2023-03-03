import { View } from 'react-native';
import CartInfoScreen from '../../organisms/ShoppingCart/CartInfoScreen'

export default function PurchaseMadeTemplate() {
  return (
    <View>
      <CartInfoScreen text="Compra finalizada!" />
    </View>
  )
};
