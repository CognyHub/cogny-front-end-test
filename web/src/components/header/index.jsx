import React from 'react';
import { CartContainer, CartItemsQty, CartText, Container, HeaderHero, Logo, LogoContainer } from './styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({cartItems}) {
  const itemTextCounter = cartItems === 1 ? 'item' : 'itens'

  return (
    <Container>
      <Link to="/">
        <LogoContainer>
          <HeaderHero>cognyshoes</HeaderHero>
          <Logo src='logo.svg' alt='logo'/>
        </LogoContainer>
      </Link>
      <Link to="/cart">
        <CartContainer>
          <CartText> Meu carrinho </CartText>
          <CartItemsQty>{`${cartItems} ${itemTextCounter}`}</CartItemsQty>
        </CartContainer>
      </Link>
    </Container>
  );
}

Header.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image_url: PropTypes.string,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default Header;
