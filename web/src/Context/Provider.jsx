import React, { useEffect, useMemo, useState } from 'react';
import CartItemsContext from './CartItemsContext';

function Provider({ children }) {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    setCartItems(cart.length);
  }, []);

  const value = useMemo(() => {
    return {
      cartItems,
      setCartItems,
    };
  }, [cartItems]);

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
}

export default Provider;
