import { useContext, useState,useEffect } from 'react';
import CartCard from '../components/CartCard';
import CartContext from '../context/CartContext';

function Cart() {
  const { orders,setOrders } = useContext(CartContext);

  return (
   <section className='cart-container'>
      {orders?.map((x)=> (
        CartCard(x.image,
          x.product,
          x.description,
          x.price,
          x.quantity
          ) 
      )
      )}
   </section>
  );
}

export default Cart;
