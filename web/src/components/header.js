import React from 'react'
import './header.css'
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Header(props) {
  let isPlural = props.itemCart < 2 ? 'item' : 'itens';
  return (
    <div className="header">
        <Link to='/'>
          <img src={logo} alt="logo" className='header-image'/>
        </Link>
        <div className="cart">
        <Link to='/cart' className="header-link">Meu carrinho</Link >
        <span>{props.itemCart} {isPlural} </span>
        </div>
    </div>
  )
};
