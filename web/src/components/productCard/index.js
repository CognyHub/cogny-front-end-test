import './card.css'
import { useContext } from 'react'
import CartContext from '../../context/context'

export default function ProductCard({data}) {
  const { cart, setCart } = useContext(CartContext)

  function addToCart(index) {
    const newCart = cart
    const itemInCart = newCart.find(item => item.description === data[index].description)
    if (itemInCart) {
      itemInCart.quantity += 1
      setCart(newCart)
    } else {
      newCart.push({
        image: data[index].image,
        description: data[index].description,
        price: data[index].price,
        quantity: 1
      })
      setCart(newCart)
    }
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
          onClick={() => addToCart(index)}
          >ADICIONAR AO CARRINHO</button>
        </div>
      ))}
    </div>
  )
}