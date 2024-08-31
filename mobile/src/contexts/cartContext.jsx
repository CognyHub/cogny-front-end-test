import { createContext, useEffect, useState } from 'react';
import React from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = cartItems?.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotalCartPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [cartItems]);

  const updateItem = async (product, changes) => {
    setCartItems((prevItems) =>
      prevItems?.map((item) =>
        {
          return item.id === product.id ? { ...item, ...changes } : item
        }
      )
    );
  };

  const removeItem = async (product) => {
    setCartItems((prevItems) => prevItems?.filter((item) => item.id !== product.id));
  };

  const removeAllItems = async () => {
    setCartItems([]);
  }

  const isProductOnCart = (productId) => {
    return cartItems?.find((item) => item.product_id === productId);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      totalCartPrice,
      setTotalCartPrice,
      setCartItems,
      updateItem,
      removeItem,
      removeAllItems,
      isProductOnCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}