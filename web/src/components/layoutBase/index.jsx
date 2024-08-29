import React from 'react';
import { Container } from './styles';
import Header from '../header';

function LayoutBase({children}) {
  return (
    <>
      <Header cartItems={1}/>
      <Container>
        { children }
      </Container>
    </>

  );
}

export default LayoutBase;
