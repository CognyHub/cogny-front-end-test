import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native'
import OrderCard from '../components/OrderCard';
import CartContext from '../context/CartContext';

export default function Cart() {
  const { orders,setOrders, setTotal, total } = useContext(CartContext);
  const handleClick = () => {
    alert('Compra Finalizada');
    setOrders([]);
    setTotal();
  }

  return (
    <ScrollView style={styles.orderMain}>
      <View style={styles.orderContainer}

      >
        {
          orders.map((product) => (
            OrderCard(
              product.image,
              product.description,
              product.price,
              product.product,
              product.quantity
            )
          ))
        }
        <View style={{textAlign: 'center'}} >
          <Text style={styles.totalText} >Total</Text>
          <Text style={styles.total} >
            {total && `R$${total.toFixed(2).toString().replace('.', ',')}`}
            </Text>
          <TouchableOpacity style={styles.cartButton} onPress={handleClick}>
                <Text style={styles.textCartButton}>Finalizar Compra</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  orderMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2E2E2E',
    width: '100%',
    height: '100%'
  },

  orderContainer: {
    backgroundColor: 'white',
    border: '1px solid grey',
    borderRadius: '5px',
    height: '30%',
    justifyContent: 'space-between',
    margin: 'auto',
    marginTop: '20px',
    width: '90%',
    height: '100%'
  },
  cartButton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ef3d5e',
    borderRadius: 5,
    height: 40,
    marginBottom: 10,
    textAlign: ' center',
    width: '90%',
  },
  textCartButton : {
    margin: 'auto',
    fontSize: 15,
    color: 'white'
  },
  totalText: {
    fontSize: '15px',
    color: 'grey'
  },
  total: {
    fontSize: '20px',
    fontWeight: 'bold'
  }

});