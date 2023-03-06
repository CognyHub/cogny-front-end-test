import React, { useMemo, useState } from 'react';
import CartContext from './context';

function Provider({ children }) {
  const [cart, setCart] = useState([]);

  const value = useMemo(() => ({ cart, setCart }), [cart]);

  return (
    <CartContext.Provider value={ value }>
      { children }
    </CartContext.Provider>
  );
}

export default Provider;