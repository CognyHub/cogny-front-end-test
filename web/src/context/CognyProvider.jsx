import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { /* getFirestore,  */collection, getDocs } from 'firebase/firestore';
import CognyContext from './CognyContext';
import db from '../firebase/firebase';
import getCartInfo from '../helpers/getCartInfo';

/* Este Context apenas repassa para os componentes filhos quando for atualizado o status do pedido
   ou inserido/excluido algum usuário */
function CognyProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [products, setProducts] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const produtosRef = collection(db, 'produtos');
      const produtosSnapshot = await getDocs(produtosRef);
      const produtosData = produtosSnapshot.docs.map((doc) => {
        const data = doc.data();
        const { id } = doc;
        return {
          id,
          name: data['Descrição'],
          urlImage: data['Imagem Url'],
          price: data['Preço'],
        };
      });
      setProducts(produtosData);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const cartItems = getCartInfo();
    const total = cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.price, 0) : 0;
    setBalance(total);
  }, []);

  const contextValue = useMemo(() => ({
    theme,
    setTheme,
    products,
    balance,
  }), [theme, products, balance]);

  CognyProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <CognyContext.Provider value={contextValue}>
      {children}
    </CognyContext.Provider>
  );
}

export default CognyProvider;
