import React, { useState } from 'react';
import Context from './context';

function Provider({ children }) {
  const [cart, setCart] = useState([]);

  const value = { cart, setCart };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;