import React from 'react';
import { Btn, BtnText, Container, EmtyCartImage, TextCart } from './styles';
import emptyCart from '../../../assets/emptyCart.png';

export default function EmptyCart({navigation}) {
  return (
    <Container>
      <TextCart>Seu carrinho está vazio!</TextCart>
      <EmtyCartImage source={emptyCart} />
      <Btn onPress={() => navigation.navigate('ProductList')}>
        <BtnText>voltar à página inicial</BtnText>
      </Btn>
    </Container>
  );
}