import { ReactNode, createContext, useContext } from 'react';

type CartProviderProps = {
  children: ReactNode;
};

const CartProviderContext = createContext({});

export function CartProvider({ children }: CartProviderProps) {
  return (
    <CartProviderContext.Provider value={{}}>
      {children}
    </CartProviderContext.Provider>
  );
}

export const useCart = () => useContext(CartProviderContext);
