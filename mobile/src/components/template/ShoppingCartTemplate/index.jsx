import { useContext } from 'react';
import { View } from 'react-native';
import Context from '../../../context';
import CartInfoScreen from '../../organisms/ShoppingCart/CartInfoScreen'
import TableCart from '../../organisms/ShoppingCart/TableCart'

export default function ShoppingCartTemplate() {
  const { productsSelected } = useContext(Context);

  return (
    <View>
      {productsSelected?.length === 0 ? <CartInfoScreen text="Seu carrinho está vazio!" /> : <TableCart />}
    </View>
  )
};
