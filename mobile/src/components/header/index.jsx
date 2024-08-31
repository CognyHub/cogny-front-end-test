import React from 'react';
import { CartContainer, CartCunterContainuer, CartIcon, CartItemsQty, CartText, Container, HeaderHero, Logo, LogoContainer } from './styles';
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.png';
import cartIcon from '../../../assets/cartIcon.png';
import { TouchableOpacity } from 'react-native';

function Header({cartItems, navigation}) {
  const itemTextCounter = cartItems === 1 ? 'item' : 'itens'

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
        <LogoContainer>
            <HeaderHero>cognyshoes</HeaderHero>
            <Logo source={logo} alt='logo'/>
        </LogoContainer>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <CartContainer>
            <CartIcon source={cartIcon} alt='logo'/>
            <CartCunterContainuer>
              <CartItemsQty>{cartItems}</CartItemsQty>
            </CartCunterContainuer>
        </CartContainer>
      </TouchableOpacity>
    </Container>
  );
}

Header.propTypes = {
  cartItems: PropTypes.number.isRequired,
};


export default Header;
