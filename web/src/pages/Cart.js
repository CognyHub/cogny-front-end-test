import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cart({ setCartItems }) {
  const [cart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
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
    navigate('/products');
  };

  return (
    <>
      <Link to="/products">Voltar</Link>
      {!cart.length && (
        <h1>Você não tem itens no carrinho ainda.</h1>
      )}
      {cart.length && (
        <>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>PREÇO UN.</th>
                <th>PREÇO TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ title, price, quantity, imgUrl }) => (
                <tr>
                  <td><img src={imgUrl} alt={title} style={{ width: 100, height: 60 }} /></td>
                  <td>{title}</td>
                  <td>{quantity}</td>
                  <td>{`R$${price.toFixed(2).replace('.', ',')}`}</td>
                  <td>{`R$${(price * quantity).toFixed(2).replace('.', ',')}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1>{`Total: R$${cartTotalPrice.toFixed(2).replace('.', ',')}`}</h1>
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
