import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
    </Router>
  );
}

export default App;
