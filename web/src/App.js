import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ShoeList from './pages/ShoeList';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ShoeList />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
  );
};

export default App;
