import { useContext } from 'react';
import LayoutBase from '../components/layoutBase';
import { CartContext } from '../contexts/cartContext';
import CartTable from '../components/cartTable';

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <LayoutBase>
      <CartTable items={cartItems} />
    </LayoutBase>
  );
};

export default Cart;
