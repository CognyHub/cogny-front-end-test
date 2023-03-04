import { useContext } from 'react';
import CartCard from '../components/CartCard';
import CartContext from '../context/CartContext';
import '../style/Cart.css'

function Cart() {
  const { orders, setOrders } = useContext(CartContext);
  const { total, setTotal } = useContext(CartContext);

  const handleClick = () => {
    if (orders.length >= 1) {
      alert("Compra Finalizada");
      setOrders([]);
      setTotal();
    }
  }

  return (
    <section className='cart-container'>
      <div className='description'>
        <p>Produto</p>
          <div className='description-right'>
            <p>Quantidade</p>
            <p>Preço</p>        
          </div>
      </div>
      {orders?.map((x) => (
        CartCard(x.image,
          x.product,
          x.description,
          x.price,
          x.quantity,
          x.product
        )
      )
      )}
      <div className='finish-cart'>
        <button
          className='button-cart'
          onClick={() => handleClick()}
          >
          Finalizar Compra
        </button>
        <p className='finish-total-price'>
          {total && total.toFixed(2).toString().replace('.', ',')}
          </p>
      </div>
    </section>
  );
}

export default Cart;
