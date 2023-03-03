import React from 'react'
import './header.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

export default function Header(props) {
  let isPlural = props.itemCart < 2 ? 'item' : 'itens'
  return (
    <div className="header">
      <img src={logo} alt="logo" className='header-image'/>
        <div className="cart">
        <Link to='/cart'>Meu carrinho</Link >
        <span>{props.itemCart} {isPlural} </span>
        </div>
    </div>
  )
}
