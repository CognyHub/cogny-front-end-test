import { ScrollView } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import CartBody from '../../components/CartBody';

const CartScreen = () => {
  return (
    <ScrollView bg="gray.900" p={4} contentContainerStyle={styles.container}>
      <CartBody />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default CartScreen;
