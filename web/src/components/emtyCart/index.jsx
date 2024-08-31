import React from 'react';
import { Btn, Container, EmtyCartImage, TextCart } from './styles';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <Container>
      <TextCart>Seu carrinho está vazio!</TextCart>
      <EmtyCartImage src='../../images/emptyCart.png' />
      <Link to="/">
        <Btn>
          voltar à página inicial
        </Btn>
      </Link>
    </Container>
  );
}