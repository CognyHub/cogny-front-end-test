import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Checkout from './pages/checkout/checkout';
import Products from './pages/products/Products';

export default function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <main className="main">
        <Routes>
          <Route exact path="/" element={ <Navigate to="/products" /> } />
          <Route exact path="/products" element={ <Products /> } />
          <Route exact path="/checkout" element={ <Checkout /> } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
