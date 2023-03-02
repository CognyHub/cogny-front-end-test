import '../style/Header.css'

function Header() {
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
        <button>Meu Carrinho</button>
        <span>0</span>
        </nav>
      </header>
    );
  }
  
  export default Header;
  