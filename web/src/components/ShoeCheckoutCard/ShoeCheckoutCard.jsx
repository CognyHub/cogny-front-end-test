import './shoe-checkout-card.css';
import { transformPrice } from '../../utils/transformPrice';

export default function ShoeCheckoutCard({ description, price, imageurl }) {
  return (
    <section className="shoe-checkout-card">
      <img src={imageurl} alt={description} />

      <div className="description-price-wrapper">
        <h3 className="description">{ description }</h3>
        <h3 className="price">{ transformPrice(price) }</h3>
      </div>

      <div className="qtd-wrapper">
        <input className="qtd" type="text" name="qtd" value="1" readOnly />
      </div>

      <div className="final-price-wrapper">
        <h2 className="final-price">{ transformPrice(price) }</h2>
      </div>
    </section>
  );
}