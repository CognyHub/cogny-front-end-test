import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import Toast from 'react-native-toast-message';
import { CartContextData } from '../@types/cart';
import { ProductCart } from '../@types/product';
import { useLiveStore } from '../hooks/useLiveStore';
import { getProductById } from '../service/dbService';

const CartProviderContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }) {
  const [cart, setCart] = useState<ProductCart[]>([]);
  const [liveStock] = useLiveStore();

  useEffect(() => {
    const getStoredCart = async () => {
      const storagedCart = await AsyncStorage.getItem('@CognyShoes:cart');
      const parsedCart: ProductCart[] = storagedCart
        ? JSON.parse(storagedCart)
        : [];
      setCart(parsedCart);
    };

    getStoredCart();
  }, []);

  useEffect(() => {
    const storeData = async () => {
      await AsyncStorage.setItem('@CognyShoes:cart', JSON.stringify(cart));
    };
    storeData();
  }, [cart]);

  const addProduct = async (productId: ProductCart['id']) => {
    try {
      const productExists = cart.find((product) => product.id === productId);

      const stock = liveStock.find((pStock) => pStock.product_id === productId);

      if (productExists) {
        if (productExists.quantity + 1 > stock.quantity) {
          Toast.show({
            type: 'error',
            text1: 'Quantidade fora de estoque',
            text2: `Disponível: ${stock.quantity}`,
          });
          return;
        }

        const updatedCart = cart.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

        setCart(updatedCart);
      } else {
        const product = await getProductById(productId);

        if (stock.quantity < 1) {
          Toast.show({
            type: 'error',
            text1: 'Produto fora de estoque',
          });
          return;
        }

        const updatedCart = [...cart, { ...product, quantity: 1 }];

        setCart(updatedCart);
        Toast.show({
          type: 'success',
          text1: 'Produto adicionado ao carrinho',
        });
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao adicionar produto',
      });
    }
  };

  const contextValue = useMemo(
    () => ({ cart, addProduct, setCart }),
    [cart, addProduct, setCart]
  );

  return (
    <CartProviderContext.Provider value={contextValue}>
      {children}
    </CartProviderContext.Provider>
  );
}

export const useCart = () => useContext(CartProviderContext);
