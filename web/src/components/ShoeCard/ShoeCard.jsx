import './shoe-card.css';

export default function ShoeCard({ id, description, price, imageurl, addShoeToCart, addingToCart }) {
  return (
    <div className="shoe-card">
      <img className="shoe-image" src={imageurl} alt={description} />
      <h3 className="shoe-description">{description}</h3>
      <h3 className="shoe-price">{price}</h3>

      <button onClick={() => addShoeToCart(id)} className="add-to-cart-btn">
        <p>1</p>
        <p>{ addingToCart ? 'CARREGANDO...' : 'ADICIONAR AO CARRINHO' }</p>
      </button>
    </div>
  )
}
