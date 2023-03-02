import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItemsContext from '../Context/CartItemsContext';
import ProductsTable from '../components/ProductsTable';
import TotalPrice from '../components/TotalPrice';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const { setCartItems } = useContext(CartItemsContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart')).length);
    const totalPrice = cart
      .reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    setCartTotalPrice(totalPrice);
  }, [cart]);

  const finishShopping = () => {
    window.alert('Compras finalizadas! Seu pedido chegará em breve.');
    localStorage.setItem('cart', JSON.stringify([]));
    setCartItems(0);
    navigate('/products');
  };

  return (
    <>
      {!cart.length ? (
        <h1>Você não tem itens no carrinho ainda.</h1>
      ) : (
        <>
          <ProductsTable products={cart} setProducts={setCart} />
          <TotalPrice price={cartTotalPrice} />
          <button
            type="button"
            onClick={finishShopping}
          >
            FINALIZAR PEDIDO
          </button>
        </>
      )}

    </>
  );
}

export default Cart;
