import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Products from '../pages/products';
import Cart from '../pages/cart';

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}