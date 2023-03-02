import React from 'react';
import { Link } from 'react-router-dom';
import cognyLogo from '../assets/logo.svg';
import CartItems from './CartItems';

function Header() {
  return (
    <div className="header-container">
      <div>
        <h1>COGNYSHOP</h1>
        <img
          src={cognyLogo}
          alt="Cogny logo"
          style={{ backgroundColor: 'black' }} />
      </div>
      <CartItems />
      <Link to="/products">Início</Link>
    </div>
  );
}

export default Header;
