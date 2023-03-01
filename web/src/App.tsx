import { CartProvider } from './context/CartProvider';
import Routes from './routes';

import Header from './components/Header';
import GlobalStyles from './styles/global';

function App() {
  return (
    <CartProvider>
      <GlobalStyles />
      <Header />
      <Routes />
    </CartProvider>
  );
}

export default App;
