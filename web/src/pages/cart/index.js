import React, { useContext } from 'react';
import Navbar from '../../components/navbar';
import CartContext from '../../context/context'

function Cart () {
  const { cart } = useContext(CartContext)
  return (
    <div>
      <Navbar />
      {cart.length === 0 ? <h1>Seu carrinho está vazio</h1> :
      <div>
      {cart.map((item, index) => (
        <div key={index}>
        <img width="260" src={item.image} alt={item.description} />
        <div>{item.description}</div>
          <p>R$ {item.price.toFixed(2).replace('.',',')}</p>
        </div>
      ))}
      </div>
      }
    </div>
  )
}

export default Cart;