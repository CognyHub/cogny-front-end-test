import { CartProvider } from './context/CartProvider';
import Routes from './routes';

import Header from './components/Header';
import GlobalStyles from './styles/global';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <CartProvider>
      <GlobalStyles />
      <Header />
      <Routes />
      <ToastContainer autoClose={3000} />
    </CartProvider>
  );
}

export default App;
