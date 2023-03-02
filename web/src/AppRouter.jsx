import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/organisms/global/Menu';
import Home from './pages/Home';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
