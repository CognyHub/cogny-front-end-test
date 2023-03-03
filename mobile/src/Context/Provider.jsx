import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import loadLocalStorage from '../utils/loadLocalStorage';
import CartContext from './CartContext';

function Provider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const init = async () => {
      const cart = await loadLocalStorage();
      setCartItems(JSON.parse(cart));
    };
    init();
  }, []);

  const value = useMemo(() => {
    return {
      cartItems,
      setCartItems,
      update,
      setUpdate,
    };
  }, [cartItems]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
