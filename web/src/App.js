import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsProvider from "./context/ProductsProvider";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/shopping" element={ <ShoppingCart /> } />
            <Route path="*" element={ <NotFound />} />
          </Routes>
      </ProductsProvider>
    </div>
  );
}

export default App;
