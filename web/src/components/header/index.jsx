/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  CartContainer, CartItemsQty,
  CartText, Container, HeaderHero, Logo, LogoContainer,
} from './styles';

function Header({ cartItems }) {
  const itemTextCounter = cartItems === 1 ? 'item' : 'itens';

  return (
    <Container>
      <Link to="/">
        <LogoContainer>
          <HeaderHero>cognyshoes</HeaderHero>
          <Logo src="logo.svg" alt="logo" />
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
  cartItems: PropTypes.number.isRequired,
};

export default Header;
