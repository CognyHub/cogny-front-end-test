import React, { useState } from 'react';
import CartContext from './context';

function Provider({ children }) {
  const [cart, setCart] = useState([]);

  const value = { cart, setCart };

  return (
    <CartContext.Provider value={ value }>
      {children}
    </CartContext.Provider>
  );
}

export default Provider;