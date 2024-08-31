import React, { useContext } from 'react';
import { Container } from './styles';
import Header from '../header';
import { ScrollView } from 'react-native';
import { CartContext } from '../../contexts/cartContext';

export default function LayoutBase({children, navigation}) {
  const { cartItems } = useContext(CartContext);

  return (
    <ScrollView>
      <Container>
        <Header cartItems={cartItems?.length} navigation={navigation}/>
          {children}
      </Container>
    </ScrollView>
  );
}
