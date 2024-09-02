/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getCartItems from '../services/getCartProducts';
import Loading from '../components/loading';
import addProductToCart from '../services/addProductToCart';
import removeProductFromCart from '../services/removeProductFromCart';
import updateProductOnCart from '../services/updateProductOnCart';
import cleanCart from '../services/cleanCart';
import createOrder from '../services/createOrder';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const products = await getCartItems();
        setCartItems(products.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotalCartPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [cartItems]);

  const addToCart = async (product) => {
    try {
      const data = await addProductToCart(product);

      const productItem = {
        ...product,
        id: data.id,
      };
      setCartItems((prevItems) => [...prevItems, productItem]);
    } catch (err) {
      setError(err);
    }
  };

  const updateItem = async (product, changes) => {
    try {
      await updateProductOnCart(product, changes);
      setCartItems((prevItems) => prevItems.map(
        (item) => (item.id === product.id ? { ...item, ...changes } : item),
      ));
    } catch (err) {
      setError(err);
    }
  };

  const removeItem = async (product) => {
    try {
      await removeProductFromCart(product);
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
    } catch (err) {
      setError(err);
    }
  };

  const removeAllItems = async () => {
    try {
      await cleanCart();
      setCartItems([]);
    } catch (err) {
      setError(err);
    }
  };

  const addOrder = async (order) => {
    try {
      await createOrder(order);
    } catch (err) {
      setError(err);
    }
  };

  const isProductOnCart = (productId) => cartItems.find((item) => item.product_id === productId);

  if (loading) return <Loading />;
  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      totalCartPrice,
      setTotalCartPrice,
      setCartItems,
      addToCart,
      addOrder,
      updateItem,
      removeItem,
      removeAllItems,
      isProductOnCart,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartProvider, CartContext };
