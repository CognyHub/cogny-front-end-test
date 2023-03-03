import './checkout.css';
import { Cart, Header } from '../components';
import { useEffect, useState } from 'react';
import * as shoesServices from '../services/firebase/shoes.services';
import { useLocalStorage } from '../hooks';

export default function Checkout() {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [loaded, setLoaded] = useState(false);
  const [shoes, setShoes] = useState([])

  useEffect(() => {
    document.title = 'Checkout - Cognyshoes';

    shoesServices.getShoesByIds(cart)
      .then((shoes) => setShoes(shoes))
      .then(() => setLoaded(true));
  }, [cart]);

  if (!loaded) {
    return (
      <div>
        <Header cartLength={cart.length} />
        <h1>Carregando...</h1>
      </div>
    )
  };

  return (
    <div>
      <Header cartLength={cart.length} />

      <section>
        {cart.length === 0
          ? (<h1>Carrinho vazio</h1>)
          : (<Cart shoes={shoes} ids={cart} setCart={setCart} />)}
      </section>
    </div>
  );
}