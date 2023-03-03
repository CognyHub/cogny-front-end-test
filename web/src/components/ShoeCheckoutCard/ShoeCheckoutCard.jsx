import { transformPrice } from '../../utils/transformPrice';

export default function ShoeCheckoutCard({ description, price, imageurl }) {
  return (
    <section>
      <img src={imageurl} alt={description} />
      <h3>{ description }</h3>
      <h2>{ transformPrice(price) }</h2>
    </section>
  );
}