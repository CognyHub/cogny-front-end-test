import { useContext } from 'react';
import CartCard from '../components/CartCard';
import CartContext from '../context/CartContext';

function Cart() {
  const { orders,setOrders } = useContext(CartContext);
  const { total, setTotal } = useContext(CartContext);

  const handleClick = () => {
    if(orders.length >= 1) {
      alert("Compra Finalizada");
      setOrders([]);
      setTotal();
    }
   }

  return (
   <section className='cart-container'>
      {orders?.map((x)=> (
        CartCard(x.image,
          x.product,
          x.description,
          x.price,
          x.quantity,
          x.product
          ) 
      )
      )}
      <p>{total}</p>
      <button
        onClick={() => handleClick()}
      >
        Finalizar Compra
      </button>
   </section>
  );
}

export default Cart;
