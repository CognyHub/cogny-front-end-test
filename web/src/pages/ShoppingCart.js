import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/ProductsProvider'
import '../styles/ShoppingCart.css'
import { db } from "../config/firebaseConnection";

function ShoppingCart() {
  const { cart, setCart, removeProduct, message, setMessage} = useCart();
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const navegate = useNavigate();

  const shoppingCartRef = collection(db, "checkout")

  const tableCheckoutHeader = [
    '',
    'PRODUTO',
    'QTD',
    'PREÇO',
    'Sub-total',
    'Remover Item',
  ];

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + Number(curr.price * curr.quantity), 0).toFixed(2);
    setCartTotalPrice(total);
  }, [cart])
  

  const checkout = async () => {
    const saveCheckoutDb  = await cart.map(async (eachCart) => {
      const savedWithouImage = {
        brand: await eachCart.brand,
        description: await eachCart.description,
        price: await eachCart.price,
        quantity: await eachCart.quantity,
        total: cartTotalPrice,
      }
      const savedInDB = await addDoc(shoppingCartRef, savedWithouImage)
      if(savedInDB) {
        setMessage(true)
        setCartTotalPrice(0)
        setCart([])
        setTimeout(() => navegate('/'), 1002) 
        setTimeout(() => setMessage(false), 1000) 
        return saveCheckoutDb
      }
    })
  }

  return (
    <>
    <div className='message'>{(message && 'Pedido finalizado com sucesso')}</div>
      <table className='tableCheckout'>
        {/* <caption>Finalizar pedido</caption> */}
        <thead className='theadTitle'>
          <tr>
            {
              tableCheckoutHeader.map((title, index) => (
                <th key={ index }>{title} </th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            cart.map((eachCart) => (
              <tr key={eachCart.id}>
                <td>{<img  className='eachImageShopping' src={eachCart.urlImage} alt={eachCart.description}/>}</td>
                <td>{eachCart.brand} - {eachCart.description}</td>
                <td>{eachCart.quantity}</td>
                <td>{eachCart.price}</td>
                <td>{(eachCart.price * eachCart.quantity).toFixed(2)}</td>
                <td>
                  <button className='buttonRemove'
                    type="button"
                    onClick={ () => removeProduct({ id: eachCart.id }) }
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className='totalPrice'>
              {`Total: ${cartTotalPrice}` }
        
        <button
          className='buttonCheckout'
          type="button"
          onClick={ () => checkout()}
          >
            Finalizar Pedido
        </button>
        </div>
    </>
  )
}

export default ShoppingCart