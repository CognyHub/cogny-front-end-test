import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CartItems from './components/CartItems';
import Products from './pages/Products';
import Cart from './pages/Cart';
import loadLocalStorage from './utils/loadLocalStorage';

function App() {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    loadLocalStorage();
  }, []);

  return (
    <>
      <CartItems cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart setCartItems={setCartItems} />} />
      </Routes>
    </>
  );
}

export default App;
