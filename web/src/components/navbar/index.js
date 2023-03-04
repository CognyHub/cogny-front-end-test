import shoe from '../../icons/shoe.svg'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <div>COGNYSHOES
        <img src={shoe} alt="shoe" />
      </div>
      <div className='my-cart'>Meu carrinho</div>
    </div>
  )
}