
import React, { useSelector } from 'react-redux';
import { Appbar, Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


function Header() {
  const totalProductsOnCart = useSelector((state) => state.cart.product.length);
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.Content title="COGNYSHOES">COGNYSHOES</Appbar.Content>
      <Appbar.Action
        icon="cart"
        onPress={() => navigation.navigate("Cart")}
      >
        <Badge>{totalProductsOnCart}</Badge>
      </Appbar.Action>
    </Appbar.Header>
  );
}

export default Header;
