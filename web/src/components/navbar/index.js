import shoe from '../../icons/shoe.svg'

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <div>COGNYSHOES
        <img src={shoe} alt="shoe" />
      </div>
      <div>Meu carrinho</div>
    </div>
  )
}