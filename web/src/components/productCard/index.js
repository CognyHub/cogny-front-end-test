import './card.css'

export default function ProductCard({data}) {

  function insertCart() {
    console.log('clicou')
  }

  return (
    <div>
      {data.map((item, index) => (
        <div className="product-card" key={index}>
          <img width="260" src={item.image} alt={item.description} />
          <div className='price-description'>
            <div>{item.description}</div>
            <p>R$ {item.price.toFixed(2).replace('.',',')}</p>
          </div>
          <button 
          className='insert-cart-button'
          onClick={insertCart}
          >ADICIONAR AO CARRINHO</button>
        </div>
      ))}
    </div>
  )
}