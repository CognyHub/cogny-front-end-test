import React, { useEffect } from "react";
import "./styles.css";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase.config';

// components
import UINumber from "../UINumber";

// store
import { useShoppingCartStore } from '../../store/shoppingCart'
import { useListProductsStore } from '../../store/listProducts'

//font
import "@fontsource/roboto"

export default function Catalog() {
    const increaseProduct = useShoppingCartStore(state => state.increaseProduct)
    const products = useShoppingCartStore(state => state.products)
    
    const increaseList = useListProductsStore(state => state.increaseList)
    const listProducts = useListProductsStore(state => state.listProducts)

    const fetchProducts = async () => {
        await getDocs(collection(db, "products"))
            .then((querySnapshot)=>{               
                const products = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }))

                increaseList(products)
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="catalog">
        {
            listProducts.map((product, index) => {
                const quantity = products.find(item => item.id === product.id)?.quantity || 0
                return (
                    <div className="box" key={index}>
                        <div className="product-img">
                            <img src={product.image} />
                        </div>
                        <span className="description">{product.description}</span>
                        <UINumber format={'pt-br'} children={parseFloat(product.price)} currency={'BRL'}></UINumber>
                        <div className="btn" onClick={() => increaseProduct(product)}>
                            <div className="left-side">
                                <span className="left-side-text">{quantity}</span>
                            </div>
                            <div className="right-side">
                                <span className="right-side-text">ADICIONAR AO CARRINHO</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}