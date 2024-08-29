import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ShoeList from './pages/ShoeList';
import Cart from './pages/Cart';
import { ShoesProvider } from './contexts/shoesContext';
import { CartProvider } from './contexts/cartContext';

function App() {
  return (
    <Router>
      <ShoesProvider>
      <CartProvider>
        <Routes>
          <Route path='/' element={<ShoeList />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </CartProvider>
      </ShoesProvider>
    </Router>
  );
};

export default App;
