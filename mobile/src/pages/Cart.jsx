import React, { useContext } from "react";
import LayoutBase from "../components/layoutBase";
import CartBase from "../components/cartBase";
import { CartContext } from "../contexts/cartContext";

export default function Cart({navigation}) {
  const { cartItems } = useContext(CartContext);

  return (
    <LayoutBase navigation={navigation}>
      <CartBase cartItems={cartItems} navigation={navigation}/>
    </LayoutBase>
  );
}