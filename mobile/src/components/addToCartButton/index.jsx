import React, { useContext } from 'react';
import { Btn, BtnText, Container, Counter, CounterText } from './styles';
import { CartContext } from '../../contexts/cartContext';
import { Alert } from 'react-native';

const DEFAULT_QUANTITY = 1;

export default function AddToCardBtn({ product }) {
  const { cartItems, setCartItems, isProductOnCart } = useContext(CartContext);

  const handleClick = async (product) => {
    const { id, ...productInfo } = product;
    const alreadyInCart = cartItems.find((item) => item.product_id === id);

    if (alreadyInCart) {
      Alert.alert(
        "Item já existente",
        "oops, esse item já está em seu carrinho!",
        [{ text: "OK", onPress: () => null }]
      );
      return;
    }

    setCartItems([{
      ...productInfo,
      product_id: id,
      quantity: DEFAULT_QUANTITY,
      id: `cartItemId${id}`
     }, ...cartItems,
    ]);
  }

  const counterNumber = isProductOnCart(product.id) ? 1 : 0;

  return (
    <Container>
      <Counter>
        <CounterText>{counterNumber}</CounterText>
      </Counter>
      <Btn onPress={() => handleClick(product)}>
        <BtnText>Adicionar Ao Carrinho</BtnText>
      </Btn>
    </Container>
  );
}