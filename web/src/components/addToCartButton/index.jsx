import React, { useContext } from 'react';
import { Button, Container, Counter } from './styles';
import { CartContext } from '../../contexts/cartContext';

const DEFAULT_QUANTITY = 1;

function AddToCardBtn({product}) {
  const { cartItems, addToCart, isProductOnCart } = useContext(CartContext);

  const handleClick = async (product) => {
    const { id, ...productInfo } = product;
    const alreadyInCart = cartItems.find((item) => item.product_id === id);

    if (alreadyInCart) return window.alert("oops, esse ítem já está em seu carrinho!");
    await addToCart({...productInfo, product_id: id, quantity: DEFAULT_QUANTITY});
  }

  const counterNumber = isProductOnCart(product.id) ? 1 : 0;

  console.log(isProductOnCart())
  
  return (
    <Container>
      <Counter> {counterNumber} </Counter>
      <Button onClick={() => handleClick(product)}> adicionar ao carrinho </Button>
    </Container>
  );
}

export default AddToCardBtn;
