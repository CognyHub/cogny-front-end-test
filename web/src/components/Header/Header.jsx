import './header.css';
import { useNavigate } from 'react-router-dom'

export default function Header({ cartLength }) {
  const navigate = useNavigate();

  const onCartClick = () => {
    navigate('/cart');
  }

  return (
    <header>
      <h1>Cognyshoes</h1>

      <section onClick={onCartClick}>
        <p>Meu carrinho</p>
        <p>{cartLength}{cartLength === 1 ? ' item' : ' itens'}</p>
      </section>
    </header>
  )
}