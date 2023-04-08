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

// firebase
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../firebase.config'

export default function Cart() {
    const products = useShoppingCartStore(state => state.products)
    const removeAllProducts = useShoppingCartStore(state => state.removeAllProducts)

    const alterQuantity = useShoppingCartStore(state => state.alterQuantity)

    const returnTotalCart = products.reduce((sum, item) => sum += (parseFloat(item.price) * item.quantity), 0)

    const notify = (msg) => toast(msg)

    const done = async () => {
        if (products.length > 0) {
            const shopping = products.reduce((group, item) => {
                group.push({
                    productId: item.id, 
                    qtd: item.quantity, 
                    price: item.price
                })
                return group
            }, [])
    
            const docData = {
                products: shopping,
                total: returnTotalCart,
                date: new Date(),
                source: 'web'
            }
    
            const docRef = collection(db, "shopping")
            await addDoc(docRef, docData)
    
            removeAllProducts()
            notify("PEDIDO FINALIZADO!")
        } else {
            notify("SEU CARRINHO ESTÁ VAZIO!")
        }
    }

    function updateQuantity(e, product) {
        const val = e.target.value
        alterQuantity(product.id, val)
    }
    
    return (
        <>
            <Header />
            

            <div className="cart-screen">
                <div className="table-header">
                    <div className="row">
                        <div className="cell-left rowspan2 cart-total-label space">PRODUTO</div>
                        <div className="cell-left cart-total-label">QTD</div>
                        <div className="cell-left cart-total-label">TOTAL</div>
                    </div>
                </div>

                <div>
                    {
                    products.map((product, index) => {
                        return (
                            <div className="cart-items table" key={index}>
                                <div className="row">
                                    <img src={product.image} className="image-box"/>
                                    <div className="cell-left rowspan2">
                                        <div className="box-description">
                                            <span className="cart-description">{product.description}</span>
                                            <UINumber format={'pt-br'} children={parseFloat(product.price)} currency={'BRL'}></UINumber>
                                        </div>
                                    </div>
                                    <div className="cell-left">
                                        <input className="quantity" type="number" pattern='[0-9]{0,5}' value={product.quantity} onChange={(e) => updateQuantity(e, product)}/>
                                    </div>
                                    <div className="cell-left">
                                        <UINumber format={'pt-br'} children={parseFloat(product.price * product.quantity)} currency={'BRL'}></UINumber>
                                    </div>
                                </div>
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
        </>
        
    )
}