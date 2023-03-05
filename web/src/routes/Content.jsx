import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Cart from '../pages/Cart/Cart';

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="/main" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Content;
