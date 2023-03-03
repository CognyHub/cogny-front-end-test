import React from 'react';
import logo from '../../Logo.svg'

import './styleNavBar.css';
// import { Container } from './styles';

function navbar() {
  return (
    <nav>
        <div className='Logo'>
            <h1><a className='link-nav' href='/'>COGNYSHOES<img src={logo}></img></a></h1>
        </div>
        <div>
            <a className='cart-link' href='/carrinho'>
                <h6>Meu carrinho</h6>
                <span className='indicator-cart'>0</span>
            </a>
        </div>
    </nav>
  );
}

export default navbar;