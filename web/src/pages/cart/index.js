import React, { useContext } from 'react';
import Navbar from '../../components/navbar';
import CartContext from '../../context/context'

function Cart() {
  const { cart } = useContext(CartContext)
  return (
    <div>
      <Navbar />
      {cart.length === 0 ? <h1>Seu carrinho está vazio</h1> :
        <table>
          <thead>
            <tr>
              <th></th>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>PREÇO</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td><img width="100" src={item.image} alt={item.description} /></td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>R$ {item.price.toFixed(2).replace('.', ',')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      <div>
      <button>FINALIZAR PEDIDO</button>
      <div>TOTAL: R${
        cart.reduce((acc, item) => {
          return acc += item.price * item.quantity
        }, 0).toFixed(2).replace('.', ',')
        }</div>
      </div>
    </div>
  )
}

export default Cart;