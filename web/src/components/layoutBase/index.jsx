import React, { useContext } from 'react';
import { Container } from './styles';
import Header from '../header';
import { CartContext } from '../../contexts/cartContext';

function LayoutBase({children}) {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Header cartItems={cartItems.length} />
      <Container>
        { children }
      </Container>
    </>

  );
}

export default LayoutBase;
