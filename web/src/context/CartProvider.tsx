import { ReactNode, createContext, useContext, useState } from 'react';
import { Product } from '../types/product';

type CartProviderProps = {
  children: ReactNode;
};

type CartContextData = {
  cart: Product[];
};

const CartProviderContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps) {
  return (
    <CartProviderContext.Provider value={{}}>
      {children}
    </CartProviderContext.Provider>
  );
}

export const useCart = () => useContext(CartProviderContext);
