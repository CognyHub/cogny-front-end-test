import React from 'react';
import { CartContainer, CartItemsQty, CartText, Container, HeaderHero, Logo, LogoContainer } from './styles';

function Header({cartItems}) {
  const itemTextCounter = cartItems === 1 ? 'item' : 'itens'

  return (
    <Container>
      <LogoContainer>
        <HeaderHero>cognyshoes</HeaderHero>
        <Logo src='logo.svg' alt='logo'/>
      </LogoContainer>
      <CartContainer>
        <CartText> Meu carrinho </CartText>
        <CartItemsQty>{`${cartItems} ${itemTextCounter}`}</CartItemsQty>
      </CartContainer>
    </Container>
  );
}

export default Header;
