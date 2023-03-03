import React from 'react';
import { Link } from 'react-router-dom';
import cognyLogo from '../assets/logo.svg';
import CartItems from './CartItems';

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1>COGNYSHOP</h1>
        <img
          src={cognyLogo}
          alt="Cogny logo"
          style={{ backgroundColor: '#141419' }} />
      </div>
      <CartItems />
      <Link to="/products">
        <p className="go-home">Início</p>
      </Link>
    </div>
  );
}

export default Header;
