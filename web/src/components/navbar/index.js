import shoe from '../../icons/shoe.svg'
import './navbar.css'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/context'

export default function Navbar() {
  const { cart } = useContext(CartContext)
  const [ cartLength, setCartLength ] = useState(0)

  //update cart.length every time cart changes
  useEffect(() => {
    const changeCarLength = () => {
    cart.length === 0 ? setCartLength(0) : setCartLength(cart.length)
    };
    changeCarLength();
  }, [cart])


  return (
    <div className='nav-bar'>
      <div>COGNYSHOES
        <img src={shoe} alt="shoe" />
      </div>
      <div
        className='my-cart'
        onClick={() => console.log(cart)}
      >Meu carrinho 
        <br/>
        {cart.length === 0 ? <>0</> : <>{cartLength} itens</>}
      </div>
    </div>
  )
}