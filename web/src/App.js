import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Provider from './context/Provider';

function App() {

  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={ <Home />}/>
        <Route exact path="/cart" element={ <Cart />}/>
      </Routes>
    </Provider>
  );
}

export default App;
