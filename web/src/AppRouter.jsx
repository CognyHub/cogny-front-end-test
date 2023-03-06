import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/organisms/global/Menu';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import PurchaseMade from './pages/PurchaseMade';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/purchasemade" element={<PurchaseMade />} />
      </Routes>
    </BrowserRouter>
  );
}
