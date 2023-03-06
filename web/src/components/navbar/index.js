import shoe from '../../icons/shoe.svg'
import './navbar.css'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/context'

export default function Navbar() {
  const navigate = useNavigate()
  const { cart } = useContext(CartContext)
  const [ cartLength, setCartLength ] = useState(0)

  useEffect(() => {
    let sum = 0
    cart.forEach(item => {
      sum += item.quantity
    })
    setCartLength(sum)
  }, [cart])
  
  return (
    <div className='nav-bar'>
      <div
        className='company-name'
        onClick={() => navigate('/')}
      >COGNYSHOES
        <img src={shoe} alt="shoe" />
      </div>
      <div
        className='my-cart'
        onClick={() => navigate('/cart')}
      >Meu carrinho 
        <br/>
        {cart.length === 0 ? <>0</> : <>{cartLength} itens</>}
      </div>
    </div>
  )
}