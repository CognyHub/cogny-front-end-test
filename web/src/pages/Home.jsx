import { useEffect, useState } from 'react'
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
    </div>
  )
}