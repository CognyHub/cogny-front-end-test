import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import CartContext from '../Context/CartContext';
import styles from '../styles/totalPrice';

function TotalPrice() {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems
    .reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TOTAL</Text>
      <Text style={styles.price}>{`R$${totalPrice.toFixed(2).replace('.', ',')}`}</Text>
    </View>
  );
}

export default TotalPrice;
