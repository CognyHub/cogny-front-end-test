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
      <div onClick={onLogoClick} className="logo-name-wrapper">
        <h1>COGNYSHOES</h1>
        <img src="/logo.png" alt="Cognyshoes" />
      </div>

      <section onClick={onCartClick} className="cart-link">
        <div>
          <p className="cart-link-text">Meu carrinho</p>
          <p className="cart-link-number">
            {cartLength}{cartLength === 1 ? ' item' : ' itens'}
          </p>
        </div>

        <img
          className="cart-icon"
          src="/cart-icon.jpg"
          alt="carrinho de compras"
        />
      </section>
    </header>
  )
}