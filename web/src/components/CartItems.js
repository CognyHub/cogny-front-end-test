import React from 'react';
import { Link } from 'react-router-dom';

function CartItems({ cartItems }) {
  return (
    <Link to="/cart">
      <p>Meu Carrinho</p>
      <p>{`${cartItems} item(s)`}</p>
    </Link>
  );
}

export default CartItems;
