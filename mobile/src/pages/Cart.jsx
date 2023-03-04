import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import { clean } from '../features/cart/cartSlice';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import formatToMoneyPtBr from '../utils/formatter';

function Cart() {
  const products = useSelector((state) => state.cart.product);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toast = useToast();

  const handleCheckout = () => {
    dispatch(clean());
    navigation.navigate('Products');
      toast.show('Compra finalizada com sucesso', {
        type: 'success',
        placement: 'top'
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {products.length === 0 ? (
          <Text>Não possui produtos no carrinho</Text>
        ) : (
          products.map(({ url_imagem, preco, descricao }, index) => (
            <Card style={styles.container} key={index}>
              <Card.Cover source={{ uri: url_imagem }} />
              <Card.Content>
                <Title>{descricao}</Title>
                <Paragraph>{formatToMoneyPtBr(preco)}</Paragraph>
              </Card.Content>
            </Card>
          ))
        )}
        <Button
          onPress={() => handleCheckout()}
          title="Finalizar compra"
        >
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default Cart;