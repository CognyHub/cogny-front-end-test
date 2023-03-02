import { ReactNode } from 'react';
import { ProductCart } from './product';

export type CartProviderProps = {
  children: ReactNode;
};

export type CartContextData = {
  cart: ProductCart[];
  addProduct: (productId: string) => Promise<void>;
};
