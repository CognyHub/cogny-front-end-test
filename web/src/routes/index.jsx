import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cart" element={ <Home /> } />
        <Route path="*" element={ <h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
