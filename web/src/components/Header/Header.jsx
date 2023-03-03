import './header.css';
import { useNavigate } from 'react-router-dom';

export default function Header({ cartLength }) {
  const navigate = useNavigate();

  const onCartClick = () => {
    navigate('/cart');
  }

  const onLogoClick = () => {
    navigate('/');
  }

  return (
    <header>
      <div onClick={onLogoClick}>
        <h1>Cognyshoes</h1>
        <img src="/logo.png" alt="Cognyshoes" />
      </div>

      <section onClick={onCartClick}>
        <p>Meu carrinho</p>
        <p>{cartLength}{cartLength === 1 ? ' item' : ' itens'}</p>
      </section>
    </header>
  )
}