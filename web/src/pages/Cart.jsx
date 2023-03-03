import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const products = useSelector((state) => state.cart.product);
  return (
    <div>
      <Link to="/">Voltar para produtos</Link>
      {products}
    </div>
  );
}

export default Cart;
