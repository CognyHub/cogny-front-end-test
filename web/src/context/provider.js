import React, {useState} from "react";
import CartContext from "./cartContext";

export default function Provider({children}){
const [cartProduct, setCartProduct] = useState([]);


const state = {cartProduct, setCartProduct}

  return (
    <CartContext.Provider value={state}>
      {children}
    </CartContext.Provider>
  )
}