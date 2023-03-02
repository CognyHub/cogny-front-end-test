import { useHistory } from 'react-router-dom';
import '../style/Header.css'

function Header() {
  const navigate = useHistory();
  return (
    <header className='header'>
      <div className='logo-container'>
        <h1 className='text-logo'>CognyShoes</h1>
        <img
          src='https://flaticons.net/icon.php?slug_category=shopping&slug_icon=shoe'
          alt='tenis-logo'
          width='50px'
        />
      </div>
      <nav>
        {/* <NavLink to="/cart">About</NavLink> */}

        <button
          onClick={() => navigate.push('/cart')}
        >
          Meu Carrinho</button>
        <span>0</span>
      </nav>
    </header>
  );
}

export default Header;
