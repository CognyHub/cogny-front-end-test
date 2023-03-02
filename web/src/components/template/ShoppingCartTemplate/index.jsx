import { useContext } from 'react';
import Context from '../../../context';
import CartInfoScreen from '../../organisms/ShoppingCart/CartInfoScreen'
import TableCart from '../../organisms/ShoppingCart/TableCart'

export default function ShoppingCartTemplate() {
  const { productsSelected } = useContext(Context);

  return (
    <div>
      {productsSelected.length === 0 ? <CartInfoScreen /> : <TableCart />}
    </div>
  )
};
