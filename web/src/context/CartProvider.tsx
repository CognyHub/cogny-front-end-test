import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLiveStore } from '../hooks/useLiveStore';
import { getProductById } from '../services/dbService';
import { CartContextData, CartProviderProps } from '../types/cart';
import { ProductCart } from '../types/product';
import { Stock } from '../types/stock';

const CartProviderContext = createContext<CartContextData>(
  {} as CartContextData
);

//TODO: Adicionar logica para reservar a quantidade de produtos no estoque quando o usuario adicionar ao carrinho
// Tentei fazer isso usando o firebase, mas não consegui

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductCart[]>(() => {
    const storagedCart = localStorage.getItem('@CognyShoes:cart');
    return storagedCart ? JSON.parse(storagedCart) : [];
  });

  const [liveStock] = useLiveStore();

  useEffect(() => {
    localStorage.setItem('@CognyShoes:cart', JSON.stringify(cart));
  }, [cart]);

  const addProduct = async (productId: string) => {
    try {
      const productExists = cart.find((product) => product.id === productId);

      const stock = liveStock.find(
        (pStock) => pStock.product_id === productId
      ) as Stock;

      if (productExists) {
        if (productExists.quantity + 1 > stock.quantity) {
          toast.error('Quantidade fora de estoque');
          return;
        }

        const updatedCart = cart.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

        setCart(updatedCart);
        toast.success('Produto adicionado ao carrinho!');
      } else {
        const product = await getProductById(productId);

        if (stock.quantity < 1) {
          toast.error('Produto fora de estoque');
          return;
        }

        const updatedCart = [...cart, { ...product, quantity: 1 }];

        setCart(updatedCart);
        toast.success('Produto adicionado ao carrinho!');
      }
    } catch (error) {
      console.error(error);
      toast.error('Erro ao adicionar produto ao carrinho');
    }
  };

  return (
    <CartProviderContext.Provider value={{ cart, addProduct, setCart }}>
      {children}
    </CartProviderContext.Provider>
  );
}

export const useCart = () => useContext(CartProviderContext);
