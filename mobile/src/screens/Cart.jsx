import React, { useContext } from 'react';
import {
  Text,
  FlatList,
  Pressable,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import CartContext from '../Context/CartContext';
import CartItem from '../components/CartItem';
import addToLocalStorage from '../utils/addToLocalStorage';
import styles from '../styles/cart';
import TotalPrice from '../components/TotalPrice';

function Cart({ navigation }) {
  const { cartItems, setCartItems, setUpdate } = useContext(CartContext);

  const finishShopping = async () => {
    Alert.alert(
      'Compra finalizada!',
      'Seus produtos chegarão em breve.',
      [{
        onPress: async () => {
          await addToLocalStorage([]);
          setUpdate((prev) => prev + 1);
          setCartItems([]);
          navigation.goBack();
        },
      }],
    );
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <SafeAreaView style={styles.list}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <CartItem product={item} key={item.id} />}
        />
        <TotalPrice />
      </SafeAreaView>
      <View style={styles.buttonArea}>
        <Pressable disabled={!cartItems.length} style={styles.button} onPress={finishShopping}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </Pressable>
      </View>
    </View>
  );
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default Cart;
