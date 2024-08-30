import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import { ShoesProvider } from './contexts/shoesContext';
import { CartProvider } from './contexts/cartContext';

function App() {
  return (
    <CartProvider>
      <ShoesProvider>
        <Router>
            <Routes>
              <Route path='/' element={<ProductList />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
        </Router>
      </ShoesProvider>
    </CartProvider>
  );
}

export default App;
