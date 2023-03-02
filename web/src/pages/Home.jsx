import { useEffect, useState } from 'react'
import { ShoeCard } from '../components';
import { getShoes } from '../services/firebase/shoes.services';

export default function Home() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    document.title = 'Cognyshoes - Home';
    getShoes().then((shoes) => setShoes(shoes))
  }, []);

  return (
    <div>
      Home
      {shoes.length === 0
        ? <p>Loading...</p>
        : shoes.map((shoe) => <ShoeCard key={shoe.id} {...shoe} />) }
    </div>
  )
}