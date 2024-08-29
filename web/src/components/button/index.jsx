import React from 'react';
import { Button, Container, Counter } from './styles';

function AddToCardBtn({num}) {
  return (
    <Container>
      <Counter> {num} </Counter>
      <Button> adicionar ao carrinho </Button>
    </Container>
  );
}

export default AddToCardBtn;
