import Content from "./components/Content";
import CartProvider from "./context/CartProvider";
import './style/App.css'

function App() {
  return (
    <div className="App">
    <CartProvider>
      <Content />
    </CartProvider>
    </div>
  );
}

export default App;
