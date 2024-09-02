import React, { useContext } from 'react';
import { Btn, BtnText, Container, TotalLabel, TotalPrice } from './styles';
import { CartContext } from '../../contexts/cartContext';
import priceFormatter from '../../helpers/priceFormatter';
import CartProduct from './cartProduct';
import EmptyCart from '../emptyCart';
import { Alert } from 'react-native';

export default function CartBase({ cartItems, navigation }) {
  const { setCartItems, totalCartPrice } = useContext(CartContext);

  const handleOnPress = () => {
    setCartItems([]);

    Alert.alert(
      "Pedido realizado com sucesso!",
      "",
      [{ text: "Continuar comprando", onPress: () => navigation.navigate('ProductList') }]
    );
  };

  return (
    <Container>
      {
        cartItems.length > 0 ? (
          <>
            { cartItems.map((cartItem) => (<CartProduct product={cartItem} key={cartItem.id} />)) }
            <TotalLabel>Total</TotalLabel>
            <TotalPrice>{priceFormatter(totalCartPrice)}</TotalPrice>
            <Btn onPress={() => handleOnPress()}>
              <BtnText>finalizar pedido</BtnText>
            </Btn>
          </>
        ) : (
          <EmptyCart navigation={navigation}/>
        )
      }
    </Container>
  );
}