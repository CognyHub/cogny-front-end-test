import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages'
import { Checkout } from '../pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cart" element={ <Checkout /> } />
        <Route path="*" element={ <h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
