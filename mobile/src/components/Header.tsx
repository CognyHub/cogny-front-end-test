import { Box, Flex, Image, Text } from 'native-base';
import React from 'react';
import { useCart } from '../context/CartProvider';
import { useNavigate } from '../hooks/useNavigate';

export default function Header() {
  const { cart } = useCart();
  const cartSize = cart.length;

  const navigateToHome = useNavigate('Home');
  const navigateToCart = useNavigate('Cart');

  return (
    <Flex
      px="17px"
      w="375px"
      h="84px"
      mb={'20px'}
      direction="row"
      justify="space-between"
      align="center">
      <Box onTouchStart={navigateToHome}>
        <Image source={require('../assets/logo.png')} alt="Cognyshoes logo" />
      </Box>

      <Box onTouchStart={navigateToCart}>
        <Text
          position="absolute"
          top="-4px"
          right="-4px"
          w="18px"
          h="18px"
          fontSize={12}
          color="#fff"
          textAlign="center"
          bg="#F8375D"
          zIndex={1}
          borderRadius="50px"
          fontWeight="bold">
          {cartSize || 0}
        </Text>

        <Image
          source={require('../assets/bagIcon.png')}
          alt="Icone de sacola"
          w="30px"
          h="30px"
        />
      </Box>
    </Flex>
  );
}
