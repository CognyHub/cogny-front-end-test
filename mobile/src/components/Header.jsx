import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import CartContext from '../Context/CartContext';
import cognyLogo from '../assets/logo.png';
import styles from '../styles/header';

function Header({ navigation }) {
  const { cartItems } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>COGNYSHOES</Text>
        <Image source={cognyLogo} style={{ height: 24, width: 35 }} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={styles.cart}
      >
        <Text style={styles.cartMainText}>Meu Carrinho</Text>
        <Text style={styles.cartSubText}>{`${cartItems.length} item(s)`}</Text>
      </TouchableOpacity>
    </View>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Header;
