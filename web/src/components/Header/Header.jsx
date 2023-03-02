import './header.css';

export default function Header({ cartLength }) {
  return (
    <header>
      <h1>Cognyshoes</h1>

      <section>
        <p>Meu carrinho</p>
        <p>{cartLength}{cartLength === 1 ? ' item' : ' itens'}</p>
      </section>
    </header>
  )
}