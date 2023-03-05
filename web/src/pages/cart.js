import React from 'react';
import { useContext } from 'react'
import CartContext from '../context/cartContext';
import '../cart.css'
import Header from '../components/header';

export default function Cart() {
  const { cartProduct } = useContext(CartContext)
  const ValueTotal = cartProduct.reduce((acc, item) => acc + ~~item.price[1], 0)
  return (
    <>
    <Header itemCart={cartProduct.length}/>
    <div className="cart-container">
      <table>
        <thead>
          <tr>
            <th ></th>
            <th >PRODUTO</th>
            <th >QTD</th>
            <th >PRECO</th>
          </tr>
        </thead>
        <tbody>
          {cartProduct.map((item) => {
            return(
            <tr>
              <td><img src={item.img} alt={item.description}/> </td>
              <td><div className='descricao'>{item.description}</div> <div className='descricao'>{item.price}</div> </td>
              <td >{item.qtd}</td>
              <td >{item.qtd * item.price[1]}</td>
            </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row"><button class="btn-finalizar">FINALIZAR PEDIDO</button></th>
            <td></td>
            <td></td>
            <td className='td-price'><div className="product-total">TOTAL</div> <div className='total-price'> R$ {ValueTotal}</div></td>
          </tr>
        </tfoot>
      </table>
    </div>
    </>
  )
}
