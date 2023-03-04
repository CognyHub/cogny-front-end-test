
import React, { useSelector } from 'react-redux';
import { Appbar, Badge } from 'react-native-paper';


function Header() {
  const totalProductsOnCart = useSelector((state) => state.cart.product.length);
  const handleOnPress = () => {

  }
  return (
    <Appbar.Header>
      <Appbar.Content title="COGNYSHOES">COGNYSHOES</Appbar.Content>
      <Appbar.Action
        icon="cart"
        onPress={() => console.log('Carrinho pressionado', totalProductsOnCart)}
      >
        <Badge>{totalProductsOnCart}</Badge>
      </Appbar.Action>
    </Appbar.Header>
  );
}

export default Header;
