import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import loadLocalStorage from './utils/loadLocalStorage';
import Header from './components/Header';

function App() {
  useEffect(() => {
    loadLocalStorage();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
