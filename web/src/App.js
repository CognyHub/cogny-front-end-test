import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Cart from "./pages/Cart"
// theme
import ThemeProvider from "./context/theme"

// styles
import './App.css'

function App() {
  return (
    <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App