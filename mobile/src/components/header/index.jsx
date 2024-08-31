import React from 'react';
import { CartContainer, CartCunterContainuer, CartIcon, CartItemsQty, Container, HeaderHero, Logo, LogoContainer } from './styles';
import logo from '../../../assets/logo.png';
import cartIcon from '../../../assets/cartIcon.png';
import { TouchableOpacity } from 'react-native';

export default function Header({cartItems, navigation}) {
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
