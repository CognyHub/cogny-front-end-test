import React from 'react';
import { Link } from 'react-router-dom';
import {
  Btn, Container, EmtyCartImage, TextCart,
} from './styles';

import emptyCart from '../../images/emptyCart.png';

export default function EmptyCart() {
  return (
    <Container>
      <TextCart>Seu carrinho está vazio!</TextCart>
      <EmtyCartImage src={emptyCart} />
      <Link to="/">
        <Btn>
          voltar à página inicial
        </Btn>
      </Link>
    </Container>
  );
}
