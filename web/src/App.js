import Content from "./components/Content";
import CartProvider from "./context/CartProvider";

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
