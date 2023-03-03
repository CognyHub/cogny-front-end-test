import './cart.css';
import { ShoeCheckoutCard } from '../';
import * as checkoutServices from '../../services/firebase/checkout.services';
import { transformPrice } from '../../utils/transformPrice';

export default function Cart({ shoes, ids, setCart }) {
  const finishOrderOnClick = () => {
    checkoutServices.finishOrder(ids);
    setCart([]);
    alert('Pedido finalizado com sucesso!');
  }

  return (
    <div className="cart">
      <div className="cart-row">
        <span className="cart-row-space"></span>
        <span className="cart-row-product">PRODUTO</span>
        <span className="cart-row-qtd">QTD</span>
        <span className="cart-row-price">PREÇO</span>
      </div>
      {shoes.map((shoe) => <ShoeCheckoutCard key={shoe.description} {...shoe} />)}
      <button
        className="finishe-order-btn"
        onClick={finishOrderOnClick}
      >
          FINALIZAR PEDIDO
      </button>

      <section className="total-price-wrapper">
        <span>
          TOTAL
        </span>
        <span>
          {transformPrice(shoes.reduce((acc, curr) => acc + curr.price, 0))}
        </span>
      </section>
    </div>
  );
};
