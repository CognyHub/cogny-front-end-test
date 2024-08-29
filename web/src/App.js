import { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './components/productCard';
import getShoes from './service/getShoes';
import LayoutBase from './components/layoutBase';

function App() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const shoesData = await getShoes();
        setShoes(shoesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <LayoutBase>
      { shoes.map((shoe) => ( <ProductCard product={shoe} key={shoe.id} /> )) }
    </LayoutBase>

  );
};

export default App;
