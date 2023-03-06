import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import shoppingImage from '../assets/shopping-cart.png'
import shoesImage from '../assets/shoesImage.svg'
import '../styles/Navbar.css'
import { useCart } from '../context/ProductsProvider';

function Navbar() {
  const { cart } = useCart();
  return (
    <nav className='navbar'>
      <h1>
        <Link to='/' className='logo'>
          COGNYSHOES
          <img src={shoesImage} alt='shoes'/>
        </Link>
      </h1>

      <div className='shoppingImage'>
        <Link to='/shopping'>
          <img src={shoppingImage} alt="Shopping Cart"/>
        </Link>
          <span>
            {
              cart.reduce((acc, eachCart) => acc + Number(eachCart.quantity), 0 )
            } itens
          </span>
      </div>
    </nav>
  )
}

export default Navbar;