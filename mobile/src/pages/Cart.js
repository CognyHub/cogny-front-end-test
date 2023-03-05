import React, { useContext }from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'
import OrderCard from '../components/OrderCard';
import CartContext from '../context/CartContext';

export default function Cart() {
  const { orders } = useContext(CartContext);

    return (
      <ScrollView style={styles.orderMain}>
        <View style={styles.orderContainer}

>
          {
            orders.map((product)=> (
              OrderCard(
                product.image,
                product.description,
                product.price,
                product.product,
                product.quantity
              )
            ))
          }
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    orderMain: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'red',
      width: '100%',
      height: '100%'
    },

    orderContainer: {
      backgroundColor: 'white',
      border: '1px solid black',
      height: '30%',
      justifyContent: 'space-between',
      margin: 'auto',
      width: '90%',
      height: '100%'
    },
});