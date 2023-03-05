import React, { useContext } from 'react';
import Navbar from '../../components/navbar';
import CartContext from '../../context/context'

function Cart () {
  const { cart } = useContext(CartContext)
  return (
    <div>
      <Navbar />
      <div>Estou na página do carrinho</div>
      {cart.map((item, index) => (
        <div key={index}>
          <img width="260" src={item.image} alt={item.description} />
          <div>{item.description}</div>
          <p>R$ {item.price.toFixed(2).replace('.',',')}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart;