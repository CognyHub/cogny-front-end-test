import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import loadLocalStorage from './utils/loadLocalStorage';

function App() {
  useEffect(() => {
    loadLocalStorage();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
