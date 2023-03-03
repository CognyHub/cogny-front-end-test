import { useEffect, useState } from 'react';
import { getProducts } from '../services';
import Context from './';

const Provider = ({ children }) => {
  const [productsSelected, setProductsSelected] = useState([]);
  const [products, setPorducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then(({docs}) => {
        setPorducts(docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(true);
      });
  }, []);
  

  return (
    <Context.Provider
      value={{
        products,
        productsSelected,
        setProductsSelected,
        loading,
        setLoading
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
