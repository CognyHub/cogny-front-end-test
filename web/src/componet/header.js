import React from 'react'
import './header.css'
import logo from './logo.png'


export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className='header-image'/>
        <div className="cart">
        <span>Meu carrinho</span>
        <span>3 itens</span>
        </div>
    </div>
  )
}
