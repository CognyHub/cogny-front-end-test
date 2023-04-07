import React from "react"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./styles.css"

// components
import Header from "../../components/Header"
import UINumber from "../../components/UINumber"

// store
import { useShoppingCartStore } from '../../store/shoppingCart'

export default function Cart() {
    const products = useShoppingCartStore(state => state.products)
    const removeAllProducts = useShoppingCartStore(state => state.removeAllProducts)

    const returnTotalCart = products.reduce((sum, item) => sum += (parseFloat(item.price) * item.quantity), 0)

    const notify = (msg) => toast(msg);

    function done() {
        removeAllProducts()
        notify("PEDIDO FINALIZADO!")
        // add cart to firebase datastore
    }
    
    return (
        <div className="cart-screen">
            <Header />
            <div className="cart-items">
                <div className="image-box"></div>
                <span className="cart-total-label">PRODUTO</span>
                <span className="cart-total-label">QTD</span>
                <span className="cart-total-label">TOTAL</span>
            </div>

            <div>
                {
                products.map((product, index) => {
                    const quantity = products.find(item => item.id === product.id)?.quantity || 0
                    return (
                        <div className="cart-items" key={index}>
                            <img src={product.image} className="image-box"/>
                            <div className="box-description">
                                <span className="cart-description">{product.description}</span>
                                <UINumber format={'pt-br'} children={parseFloat(product.price)} currency={'BRL'}></UINumber>
                            </div>
                            <div>{product.quantity}</div>
                            <UINumber format={'pt-br'} children={parseFloat(product.price * product.quantity)} currency={'BRL'}></UINumber>
                        </div>
                    )
                })
                }
            </div>

            <div className="footer">
                <Link className="btn-footer" to="/">
                    <span className="right-side" onClick={() => done()}>FINALIZAR PEDIDO</span>
                </Link>
                <div>
                    <span className="cart-total-label">TOTAL</span>
                    <span className="total-price">
                        {returnTotalCart.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                    </span>
                </div>
            </div>
        </div>
    )
}