import { useEffect, useState } from 'react';
import { getProducts } from '../services';
import Context from './';

const Provider = ({ children }) => {
  const [productsSelected, setProductsSelected] = useState(JSON.parse(localStorage.getItem('productsSelect')) || []);
  const [products, setPorducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(({docs}) => {
        setPorducts(docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Context.Provider value={{ products, productsSelected, setProductsSelected }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
