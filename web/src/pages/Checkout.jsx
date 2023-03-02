import { Header } from '../components';
import { useEffect, useState } from 'react';
import * as cartServices from '../services/firebase/cart.services';

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    cartServices.getCart()
      .then((cart) => setCart(cart));
  }, [])

  return (
    <div>
      <Header cartLength={cart.length} />
    </div>
  );
}