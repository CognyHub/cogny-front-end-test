import React from 'react';
import { Container } from './styles';
import Header from '../header';

export default function LayoutBase({children, navigation}) {
  return (
    <Container>
      <Header cartItems={1} navigation={navigation}/>
      {children}
    </Container>
  );
}
