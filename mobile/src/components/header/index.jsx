import React from 'react';
import { CartContainer, CartCunterContainuer, CartIcon, CartItemsQty, CartText, Container, HeaderHero, Logo, LogoContainer } from './styles';
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.png';
import cartIcon from '../../../assets/cartIcon.png';

function Header({cartItems}) {
  const itemTextCounter = cartItems === 1 ? 'item' : 'itens'

  return (
    <Container>
      <LogoContainer>
        <HeaderHero>cognyshoes</HeaderHero>
        <Logo source={logo} alt='logo'/>
      </LogoContainer>
      <CartContainer>
        <CartIcon source={cartIcon} alt='logo'/>
        <CartCunterContainuer>
          <CartItemsQty>{cartItems}</CartItemsQty>
        </CartCunterContainuer>
      </CartContainer>
    </Container>
  );
}

Header.propTypes = {
  cartItems: PropTypes.number.isRequired,
};


export default Header;
