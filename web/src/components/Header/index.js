import React from "react"
import { Link } from "react-router-dom"

// styles
import "./styles.css"

// assets
import logo from '../../assets/logo.svg'

// store
import { useShoppingCartStore } from '../../store/shoppingCart'

export default function Header() {
    const products = useShoppingCartStore(state => state.products)

    return (
        <div className="header">
            <div className="logo">
                <p className="logo-name">COGNYSHOES</p>
                <img src={logo} className="logo-img"/>
            </div>
            <Link className="cart-header" to="/cart">
                <span className="cart-header-title">Meu carrinho</span>
                <span className="cart-header-items">{products.length} items</span>
            </Link>
        </div>
    )
}