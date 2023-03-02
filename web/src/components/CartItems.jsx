import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItemsContext from '../Context/CartItemsContext';

function CartItems() {
  const { cartItems } = useContext(CartItemsContext);
  return (
    <Link to="/cart">
      <p>Meu Carrinho</p>
      <p>{`${cartItems} item(s)`}</p>
    </Link>
  );
}

export default CartItems;
