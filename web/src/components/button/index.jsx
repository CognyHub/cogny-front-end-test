import React, { useContext } from 'react';
import { Button, Container, Counter } from './styles';
import { CartContext } from '../../contexts/cartContext';
import addItemToCard from '../../service/addItemToCard';


function AddToCardBtn({product}) {
  const { cartItems } = useContext(CartContext)

  const handleClick = async (product) => {
    const { id, ...productInfo } = product;
    const alreadyInCart = cartItems.find((item) => item.product_id === id);

    if (alreadyInCart) return window.alert("oops, esse ítem já está em seu carrinho!");
    await addItemToCard({...productInfo, product_id: id});
  }
  
  return (
    <Container>
      <Counter> {0} </Counter>
      <Button onClick={() => handleClick(product)}> adicionar ao carrinho </Button>
    </Container>
  );
}

export default AddToCardBtn;
