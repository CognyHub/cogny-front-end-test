import React, { createContext, useEffect, useState } from 'react';

import getProducts from '../services/getProducts';

export const ShoesContext = createContext();

export function ShoesProvider({ children }) {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const shoesData = getProducts();
    setShoes(shoesData);
  }, []);


  return (
    <ShoesContext.Provider value={{shoes}}>
      {children}
    </ShoesContext.Provider>
  );
}