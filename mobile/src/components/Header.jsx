
import React, { useSelector } from 'react-redux';
import { Appbar, Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';


function Header() {
  const totalProductsOnCart = useSelector((state) => state.cart.product.length);
  const navigation = useNavigation();
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Content icon="cart" title="COGNYSHOES" color="#FFFFFF" style={styles.title} />
      <View style={{ position: 'relative' }}>
        <Appbar.Action
          icon="cart"
          color="#FFFFFF"
          onPress={() => navigation.navigate('Cart')}
        />
        <Badge style={{ position: 'absolute' }} size={18}>
          {totalProductsOnCart}
        </Badge>
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141419',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default Header;
