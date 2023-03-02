import { useEffect, useState } from 'react'
import { Header, ShoeCard } from '../components';
import * as shoesServices from '../services/firebase/shoes.services';
import { useLocalStorage } from '../hooks';

export default function Home() {
  const [cart, setCart] = useLocalStorage('cart', [])

  const [shoes, setShoes] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [addingToCart, setAddingToCart] = useState(false);

  const addShoeToCart = async (id) => {
    console.log('Adicionando ao carrinho: ' + id);
    setAddingToCart(true);

    setCart([...cart, id]);

    setAddingToCart(false);
  }

  useEffect(() => {
    document.title = 'Cognyshoes - Home';

    shoesServices.getShoes()
      .then((shoes) => setShoes(shoes));

    setCartLength(cart.length);
  }, [cart]);

  return (
    <div>
      <Header cartLength={cartLength} />
      {shoes.length === 0
        ? <p>Loading...</p>
        : shoes.map((shoe) => (
          <ShoeCard
            key={shoe.id}
            addShoeToCart={addShoeToCart}
            addingToCart={addingToCart}
            {...shoe}
          />)
        ) }
    </div>
  )
}