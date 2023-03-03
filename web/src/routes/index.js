import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Products from '../pages/products';

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}